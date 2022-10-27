import React from "react";
import { Button } from "./Button";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          訂閱以獲取更多有料の旅遊資訊
        </p>
        <p className="footer-subscription-text">隨時訂閱 即刻爽爽</p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              type="email"
              name="email"
              placeholder="請輸入您的信箱"
            />
            <Button buttonStyle="btn--outline">訂閱</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>關於我們</h2>
            <Link to="/">了解更多</Link>
            <Link to="/">加入我們</Link>
            <Link to="/">投資方案</Link>
            <Link to="/">服務條款</Link>
          </div>
          <div className="footer-link-items">
            <h2>聯絡我們</h2>
            <Link to="/">聯絡資訊</Link>
            <Link to="/">常見問題</Link>
            <Link to="/">地理位址</Link>
            <Link to="/">贊助</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>影片介紹</h2>
            <Link to="/">e起fun暑假</Link>
            <Link to="/">東洋喜洋洋</Link>
            <Link to="/">你想得美國</Link>
            <Link to="/">台灣醉食在</Link>
          </div>
          <div className="footer-link-items">
            <h2>粉絲專業</h2>
            <Link to="/">Facebook</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Youtube</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TREFROGLE <i className="fa-solid fa-frog" />
            </Link>
          </div>
          <small className="website-rights">ERON LU © 2022</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
