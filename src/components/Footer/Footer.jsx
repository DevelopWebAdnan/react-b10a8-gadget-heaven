const Footer = () => {
  return (
    <footer className='footer footer-horizontal footer-center px-5 md:px-20 lg:px-40 py-24'>
      <div>
              <h2 className="text-3xl font-bold">Gadget Heaven</h2>
              <p>Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <div className="footer sm:footer-horizontal border-base-300 border-t pt-4">
        <nav>
          <h6 className="font-bold text-lg">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="font-bold text-lg">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="font-bold text-lg">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;