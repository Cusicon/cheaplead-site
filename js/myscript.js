class Navigate {
  constructor() {
    this.exec()
  }

  loadCon(selector) {
    $(".sectionCon").attr("hidden", "")
    $(selector).removeAttr("hidden")
  }

  dest(title = "", url, selector, extras = {}) {
    const handleExtras = (extras) => {
      const { isClicked, isAuthPage } = extras
      if (isClicked != undefined && isClicked == true) {
        console.log("isClicked: ", isClicked)
        history.pushState({ title, url, selector }, title, url)
      }
      // if (isAuthPage != undefined && isAuthPage == true) {
      //   $("header.header").attr("hidden", "");
      //   $("footer.footer").attr("hidden", "");
      // }

      // Scroll to the top of the page.
      window.scrollTo(9999, 0)
    }

    const changeTitle = (title) => {
      var originalTitle = document.title
      var newTitle = `${title != "" ? title + " -- " : ""}${
        originalTitle.includes("--")
          ? originalTitle.split("--")[1]
          : originalTitle
      }`
      document.title = newTitle
    }

    const mainMethod = () => {
      handleExtras(extras)
      changeTitle(title)
      this.loadCon(selector)
    }

    setTimeout(() => {
      mainMethod()
    }, 150)
  }

  loadPartials() {
    var partialCons = document.querySelectorAll("[data-partial]")
    partialCons.forEach((partialCon) => {
      var partialName = partialCon.dataset.partial,
        template = document.querySelector(`#${partialName}-partial`),
        partialDoc = template.content.cloneNode(true)
      partialCon.append(partialDoc)
    })
  }

  // Changes url, if user click back or forward
  handleUrlChange() {
    onpopstate = (e) => {
      if (e.state != null) {
        if (location.href.split(location.origin)[1] == e.state.url) {
          this.loadCon(e.state.selector)
        }
      } else {
        this.handleUrls(location.href.split(location.origin)[1])
      }
    }
  }

  // Handles every url
  handleUrls(baseUrl) {
    switch (baseUrl) {
      case "/":
        this.dest("", baseUrl, "#homeCon")
        break
      case "/?/pricing":
        this.dest("Pricing", baseUrl, "#pricingCon")
        break
      case "/?/demo":
        this.dest("Demo", baseUrl, "#demoCon")
        break
      case "/?/auth/signup":
        this.dest("Signup", baseUrl, "#signupCon", {
          isClicked: false,
          isAuthPage: true,
        })
        break
      case "/?/auth/login":
        this.dest("Login", baseUrl, "#loginCon", {
          isClicked: false,
          isAuthPage: true,
        })
        break

      default:
        // this.dest("", baseUrl, "#homeCon");
        break
    }
  }

  fixedBottomFooter() {
    if ($(".site-wrap").height() < window.innerHeight) {
      $("footer.footer").addClass("fixed-bottom")
    } else {
      $("footer.footer").removeClass("fixed-bottom")
    }
  }

  exec() {
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        this.loadPartials()
        this.handleUrls(location.href.split(location.origin)[1])
        this.handleUrlChange()
        setTimeout(() => {
          $("body").removeAttr("hidden")
          this.fixedBottomFooter()
        }, 200)
      }
      if (document.readyState === "interactive") {
        $("body").attr("hidden", "")
      }
    }

    window.onresize = () => {
      this.fixedBottomFooter()
    }
  }
}

class Router {
  constructor() {
    this.exec()
  }

  gotoRoute() {
    $("[data-href]").click((e) => {
      var title = e.currentTarget.dataset.title
      var href = e.currentTarget.dataset.href
      var hrefcon = e.currentTarget.dataset.hrefcon
      console.log(title, href, hrefcon)

      nav.dest(title, href, hrefcon, {
        isClicked: true,
        isAuthPage: true,
      })
    })
  }

  exec() {
    this.gotoRoute()
  }
}

const nav = new Navigate()
// new Router()

function PWA() {
  if ("serviceWorker" in navigator) {
    // register service worker
    navigator.serviceWorker.register("service-worker.js")
  }
}
PWA()
