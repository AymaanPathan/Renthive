/* eslint-disable react/prop-types */
const Footer = () => {
  return (
    <>
      <footer className="relative z-10 mt-6 px-8 bg-white pb-6 pt-10 dark:bg-dark lg:pb-12 lg:pt-16">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-8 w-full">
                <a href="/#" className="mb-4 inline-block max-w-[160px]">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
                    alt="RentHive Logo"
                    className="max-w-full dark:hidden"
                  />
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                    alt="RentHive Logo"
                    className="max-w-full hidden dark:block"
                  />
                </a>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  Welcome to RentHive, your go-to platform for renting rooms
                  hassle-free. Discover the best living options tailored for
                  you!
                </p>
                <p className="flex items-center text-sm font-medium text-dark dark:text-white">
                  <span className="mr-3 text-primary"></span>
                  <span>+012 (345) 678 99</span>
                </p>
              </div>
            </div>

            <LinkGroup header="Resources">
              <NavLink link="/rooms" label="Available Rooms" />
              <NavLink link="/how-it-works" label="How It Works" />
              <NavLink link="/faq" label="FAQ" />
              <NavLink link="/blog" label="Blog" />
            </LinkGroup>
            <LinkGroup header="Company">
              <NavLink link="/about" label="About RentHive" />
              <NavLink link="/contact" label="Contact & Support" />
              <NavLink link="/success-stories" label="Success Stories" />
              <NavLink link="/privacy" label="Privacy Policy" />
            </LinkGroup>
            <LinkGroup header="Quick Links">
              <NavLink link="/support" label="Customer Support" />
              <NavLink link="/services" label="Our Services" />
              <NavLink link="/team" label="Meet Our Team" />
              <NavLink link="/download" label="Download App" />
            </LinkGroup>

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-8 w-full">
                <h4 className="mb-6 text-lg font-semibold text-dark dark:text-white">
                  Follow Us On
                </h4>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-stroke pt-4 dark:border-dark-3">
            <div className="flex flex-col justify-between sm:flex-row">
              <p className="text-center text-base text-body-color dark:text-dark-6 sm:text-left">
                &copy; {new Date().getFullYear()} RentHive. All Rights Reserved.
              </p>
              <ul className="mt-4 flex flex-wrap items-center justify-center text-base text-body-color dark:text-dark-6 sm:mt-0">
                <li className="mr-10">
                  <a href="/terms" className="hover:text-primary">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

const LinkGroup = ({ header, children }) => {
  return (
    <div className="w-full px-4 sm:w-1/3 lg:w-3/12">
      <div className="mb-8 w-full">
        <h4 className="mb-5 text-lg font-semibold text-dark dark:text-white">
          {header}
        </h4>
        <ul>{children}</ul>
      </div>
    </div>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li className="mb-2">
      <a
        href={link}
        className="text-base text-body-color transition hover:text-primary dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  );
};

export default Footer;
