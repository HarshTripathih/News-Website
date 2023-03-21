import React from 'react'

const Footer = () => {
  return (

    <footer className="bg-dark text-center text-white">

      <div className="container p-4">

        <section className="mb-4">

          <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/profile.php?id=100025286887136" role="button">
            <i className="fab fa-facebook-f"></i>
          </a>


          <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/harshtripathih5" role="button">
            <i className="fab fa-twitter"></i>
          </a>


          <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/harshtripathih5" role="button">
          <i className="fab fa-google"></i>
          </a>


          <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/its_harsh_tripathi/" role="button">
          <i className="fab fa-instagram"></i>
          </a>


          <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/harsh-tripathi" role="button">
          <i className="fab fa-linkedin-in"></i>
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/HarshTripathih" role="button">
          <i className="fab fa-github"></i>
          </a>
        </section>

        <section className="">
          <form action="">

            <div className="row d-flex justify-content-center">

              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              {/* <div className="col-md-5 col-12">

                <div className="form-outline form-white mb-4">
                  <input type="email" id="form5Example21" className="form-control" />
                  <label className="form-label" for="form5Example21">Email address</label>
                </div>
              </div> */}

              <div className="col-auto">

                <button type="submit" className="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>

            </div>

          </form>
        </section>

        <section className="mb-4">
          <p>
          All information is deemed reliable but not guaranteed. By using this site, you agree to the terms of use.
          </p>
        </section>

        <section className="">

          <div className="row">

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="https://www.nytimes.com/" className="text-white">New York Times</a>
                </li>
                <li>
                  <a href="https://www.huffpost.com/" className="text-white">HuffPost</a>
                </li>
                <li>
                  <a href="https://www.latimes.com/" className="text-white">Los Angeles Times</a>
                </li>
                <li>
                  <a href="https://abcnews.go.com/" className="text-white">ABC News</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="https://www.bloomberg.com/asia" className="text-white">Bloomberg Business</a>
                </li>
                <li>
                  <a href="https://www.dailymail.co.uk/home/index.html" className="text-white">Daily Mail (UK)</a>
                </li>
                <li>
                  <a href="https://www.thesun.co.uk/" className="text-white">The Sun (UK)</a>
                </li>
                <li>
                  <a href="https://www.telegraph.co.uk/" className="text-white">Telegraph (UK)</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="https://www.wsj.com/" className="text-white">Wall Street Journal</a>
                </li>
                <li>
                  <a href="https://www.washingtonpost.com/" className="text-white">Washington Post</a>
                </li>
                <li>
                  <a href="https://www.reuters.com/" className="text-white">Reuters</a>
                </li>
                <li>
                  <a href="https://www.usatoday.com/" className="text-white">USA Today</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="https://www.nbcnews.com/" className="text-white">NBC News</a>
                </li>
                <li>
                  <a href="https://www.theguardian.com/international" className="text-white">Guardian (UK)</a>
                </li>
                <li>
                  <a href="https://www.mirror.co.uk/" className="text-white">Mirror (UK)</a>
                </li>
                <li>
                  <a href="https://www.bbc.com/" className="text-white">BBC News</a>
                </li>
              </ul>
            </div>

          </div>

        </section>

      </div>

      <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">News Express</a>
      </div>

    </footer>

  )
}

export default Footer