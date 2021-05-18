<template>
  <div id="contact">
    <div class="page-title">
      <h1>Contact</h1>
    </div>
    <div class="contact-wrapper">
      <div class="left">
        <div class="top">
          <div class="address">
            <h4>Netaji Safe Company ~</h4>
            <p>
              1423 ‘C’ Laxmipuri, Ford Corner, Opp. Union Bank of India,
              Kolhapur.416002 Maharashtra, India.
            </p>
          </div>
          <div class="contact-info">
            <p>
              <span>Ph.</span>
              +91 – 231 – 2641142
            </p>
            <p><span>Fax. </span>+91 – 231 – 2646542</p>
            <p>
              <span>Mob.</span> +91 –
              <a href="tel:9822090190" class="phone-link">9822 090 190</a> /
              <a href="tel:9922642299" class="phone-link">9922 642 299</a>
            </p>
            <p>
              <span>Email </span>
              <a href="mailto: info@netajisafe.com"> info@netajisafe.com</a>
            </p>
            <p class="bottom-mail">
              <a href="mailto:sales@netajisafe.com">sales@netajisafe.com</a>
            </p>
          </div>
        </div>
        <div class="bottom">
          <div class="address">
            <h4>Gopal Agencies (Auth. Dealer)</h4>
            <p>
              “Yashraj” Eradwane Housing Society, Plot No. J-5,6,7 Shop No.2,
              Deenanath Mangeshkar Hospital Road, (Corner), Pune. 411004
              Maharashtra, India.
            </p>
          </div>
          <div class="contact-info">
            <p><span>Ph. </span> +91 – 20 – 25459217</p>
            <p>
              <span>Mob.</span>
              <a class="phone-link" href="tel:9822031325">+91 – 9822 031 325</a>
            </p>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="form-wrapper">
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <input type="number" placeholder="Phone Number" />
            <textarea placeholder="Message"></textarea>
            <button>send</button>
          </form>
        </div>
      </div>
    </div>
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7643.170444184989!2d74.23308242437591!3d16.69762685398157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1006d4448c135%3A0xb27dcccb447b772f!2sUnion%20Bank%20Of%20India!5e0!3m2!1sen!2sin!4v1621317523811!5m2!1sen!2sin"
        width="100%"
        height="505"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
}
</script>

<style lang="scss" scoped>
#contact {
  position: relative;
  width: 100%;
  height: 100%;
  .page-title {
    padding-top: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #bdbdbd;
    margin: 0 187px;
    h1 {
      font-weight: 600;
      font-size: 18px;
      line-height: 161%;
      letter-spacing: 0.22em;
      text-transform: uppercase;
    }
  }
  .contact-wrapper {
    display: flex;
    width: 100%;
    padding: 25px 187px 85px 187px;
    .left {
      width: 60%;
      .top {
        display: flex;
        width: 100%;
        padding-bottom: 40px;
      }
      .bottom {
        display: flex;
        width: 100%;
      }
      .address {
        width: 50%;
        padding-right: 60px;
        h4 {
          font-weight: 600;
          font-size: 14px;
          line-height: 172%;
          text-transform: capitalize;
          margin-bottom: 20px;
        }
        p {
          font-weight: normal;
          font-size: 14px;
          line-height: 172%;
          text-transform: capitalize;
        }
      }
      .contact-info {
        width: 50%;
        padding-top: 45px;
        p {
          font-weight: 400;
          font-size: 14px;
          line-height: 172%;
          margin-bottom: 10px;
          span {
            color: #777777;
            font-size: 12px;
          }
          .phone-link {
            font-weight: 600;
          }
        }
        .bottom-mail {
          padding-left: 40px;
        }
      }
    }
    .right {
      width: 40%;
      text-align: center;
      .form-wrapper {
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        border-radius: 5px;
        padding: 40px 50px 30px 50px;
        input {
          width: 100%;
          height: 43px;
          background: #ffffff;
          border: 1px solid #d2d2d2;
          box-sizing: border-box;
          border-radius: 5px;
          margin-bottom: 18px;
          outline: none;
          padding-left: 17px;
          font-size: 14px;
          line-height: 172%;
          font-weight: 400;
          font-family: 'Spartan', sans-serif;
          &::placeholder {
            color: #929292;
            text-transform: capitalize;
          }
        }
        textarea {
          width: 100%;
          height: 82px;
          background: #ffffff;
          border: 1px solid #d2d2d2;
          box-sizing: border-box;
          border-radius: 5px;
          outline: none;
          padding-left: 17px;
          padding-top: 10px;
          font-family: 'Spartan', sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 172%;
          &::placeholder {
            color: #929292;
            text-transform: capitalize;
          }
        }
        button {
          background: #cb2929;
          border-radius: 47px;
          width: 115px;
          height: 46px;
          border: none;
          margin-top: 24px;
          font-weight: 600;
          font-size: 16px;
          line-height: 151.5%;
          color: #fff;
          text-transform: capitalize;
          cursor: pointer;
        }
      }
    }
  }
}
</style>