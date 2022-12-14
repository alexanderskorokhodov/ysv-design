import React from "react";
import "../styles/components/footer.scss";
import Instagram from "../icons/instagram";
import Telegram from "../icons/telegram";
import Vk from "../icons/vk";
import confirmIcon from "../icons/confirmIcon";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="leftFooter">
        <p className="footerTitle">Y.S.V. Club</p>
        <div className="founders">
          Founders:
          <ul>
            <ol className="founder">Yasevich boris</ol>
            <ol className="founder">Skorokhodov Alexander</ol>
            <ol className="founder">Vasilevsky Gleb</ol>
          </ul>
        </div>
        <div className="socialMedia">
          <p className="smtitle">Social Media</p>
          {Telegram}
          {Vk}
          {Instagram}
        </div>
      </div>
      <div className="rightFooter">
        <div className="handy">
          <p className="linksTitle">Handy Links</p>
          <p className="lang">Current language: EN</p>
        </div>
        <div className="links">
          <div className="link">About y.s.v. brand</div>
          <div className="link">Contact us</div>
          <div className="link">NEws & REviews</div>
          <div className="link">Products</div>
          <div className="link">Our vision</div>
        </div>
        <div className="subcribe">
          <p className="sub">Subscribe</p>
          <div className="email">
            <input className="emailInput" placeholder="your email" type="email"/>
            <div className="emailBut">{confirmIcon}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
