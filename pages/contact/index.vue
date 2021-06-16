<template>
  <div id="contact">
    <div class="page-title">
      <h1 data-aos="fade-right" data-aos-duration="900" data-aos-offset="200">
        Contact
      </h1>
    </div>
    <div class="contact-wrapper">
      <div
        class="left"
        data-aos="fade-right"
        data-aos-duration="900"
        data-aos-offset="200"
      >
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
              <a href="mailto: netajisafe@yahoo.com"> netajisafe@yahoo.com</a>
            </p>
            <!-- <p class="bottom-mail">
              <a href="mailto:sales@netajisafe.com">sales@netajisafe.com</a>
            </p> -->
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
          <input v-model="name" type="text" placeholder="Name" />
          <input v-model="email" type="email" placeholder="Email" />
          <input v-model="subject" type="text" placeholder="Subject" />
          <input v-model="number" type="number" placeholder="Phone Number" />
          <textarea v-model="message" placeholder="Message"></textarea>
          <button @click="submit">
            <div v-if="loading" class="sk-chase">
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
            </div>
            <span v-else>send</span>
          </button>
        </div>
      </div>
    </div>
    <div
      class="map"
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-offset="200"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.53191670188!2d74.22831931486685!3d16.70029088849381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc101a39b57dbbd%3A0xa858616aa2eb11bc!2sNetaji%20Safe%20Company!5e0!3m2!1sen!2sin!4v1622617493930!5m2!1sen!2sin"
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
import { formValidation } from '@/utils/validation'
export default {
  name: 'ContactPage',
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      number: '',
      message: '',
      loading: false,
    }
  },
  methods: {
    async submit() {
      const { name, email, subject, number, message } = this
      const validation = formValidation({
        name,
        email,
        subject,
        number,
        message,
      })
      if (validation.error) {
        this.$toast.error(validation.error.message)
        return
      }
      try {
        this.loading = true
        await this.submitToServer()
        this.clearForm()
        this.$toast.success(
          'Thank you for contacting us, we will respond to you shortly!'
        )
        this.loading = false
      } catch (error) {
        this.loading = false
        this.$toast.error(
          'Sorry! Something went wrong. Please try again later.'
        )
      }
    },
    submitToServer() {
      const data = {
        payload: {
          client: 'Netaji Safe Company',
          name: this.name,
          email: this.email,
          subject: this.subject,
          mobile: this.number,
          message: this.message,
          to: 'netajisafe@yahoo.com',
        },
      }

      return this.$axios.$post(
        `https://formec-mail-api.vercel.app/notify`,
        data
      )
    },
    clearForm: function () {
      this.name = ''
      this.email = ''
      this.number = ''
      this.subject = ''
      this.message = ''
    },
  },
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
    @include for-phone-only {
      margin: 0 20px 0 20px;
      padding-top: 17px;
      padding-bottom: 17px;
    }
    @include for-tablet-only {
      margin: 60px 60px 0 60px;
    }
    h1 {
      font-weight: 600;
      font-size: 18px;
      line-height: 161%;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      @include for-phone-only {
        font-size: 14px;
      }
    }
  }
  .contact-wrapper {
    display: flex;
    width: 100%;
    padding: 25px 187px 85px 187px;
    @include for-phone-only {
      padding: 25px 20px 85px 20px;
      flex-direction: column;
    }
    @include for-tablet-only {
      padding: 25px 60px 85px 60px;
      flex-direction: column;
    }
    .left {
      width: 60%;
      @include for-phone-only {
        width: 100%;
      }
      @include for-tablet-only {
        width: 100%;
      }
      .top {
        display: flex;
        width: 100%;
        padding-bottom: 40px;
        @include for-phone-only {
          flex-direction: column;
          border-bottom: 1px solid #bdbdbd;
          padding-bottom: 30px;
        }
      }
      .bottom {
        display: flex;
        width: 100%;
        @include for-phone-only {
          flex-direction: column;
          padding-top: 30px;
          padding-bottom: 40px;
        }
      }
      .address {
        width: 50%;
        padding-right: 60px;
        @include for-phone-only {
          width: 100%;
        }
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
        @include for-phone-only {
          width: 100%;
          padding-top: 22px;
        }
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
      @include for-phone-only {
        width: 100%;
      }
      @include for-tablet-only {
        width: 100%;
        margin-top: 50px;
      }
      .form-wrapper {
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        border-radius: 5px;
        padding: 40px 50px 30px 50px;
        @include for-phone-only {
          padding: 40px 20px 30px 20px;
        }
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
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: auto;
          margin-right: auto;
          .sk-chase {
            width: 28px;
            height: 25px;
            position: relative;
            animation: sk-chase 2.5s infinite linear both;
          }

          .sk-chase-dot {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            animation: sk-chase-dot 2s infinite ease-in-out both;
          }

          .sk-chase-dot:before {
            content: '';
            display: block;
            width: 25%;
            height: 25%;
            background-color: #fff;
            border-radius: 100%;
            animation: sk-chase-dot-before 2s infinite ease-in-out both;
          }

          .sk-chase-dot:nth-child(1) {
            animation-delay: -1.1s;
          }
          .sk-chase-dot:nth-child(2) {
            animation-delay: -1s;
          }
          .sk-chase-dot:nth-child(3) {
            animation-delay: -0.9s;
          }
          .sk-chase-dot:nth-child(4) {
            animation-delay: -0.8s;
          }
          .sk-chase-dot:nth-child(5) {
            animation-delay: -0.7s;
          }
          .sk-chase-dot:nth-child(6) {
            animation-delay: -0.6s;
          }
          .sk-chase-dot:nth-child(1):before {
            animation-delay: -1.1s;
          }
          .sk-chase-dot:nth-child(2):before {
            animation-delay: -1s;
          }
          .sk-chase-dot:nth-child(3):before {
            animation-delay: -0.9s;
          }
          .sk-chase-dot:nth-child(4):before {
            animation-delay: -0.8s;
          }
          .sk-chase-dot:nth-child(5):before {
            animation-delay: -0.7s;
          }
          .sk-chase-dot:nth-child(6):before {
            animation-delay: -0.6s;
          }

          @keyframes sk-chase {
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes sk-chase-dot {
            80%,
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes sk-chase-dot-before {
            50% {
              transform: scale(0.4);
            }
            100%,
            0% {
              transform: scale(1);
            }
          }
        }
      }
    }
  }
  .map {
    width: 100%;
  }
}
</style>