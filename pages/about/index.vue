<template>
  <div id="about">
    <div class="page-title">
      <h1 data-aos="fade-right" data-aos-duration="900" data-aos-offset="200">
        About
      </h1>
    </div>
    <div
      class="container"
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-offset="200"
    >
      <div class="left">
        <div class="image">
          <img src="/owner.jpg" alt="owner image" />
        </div>
      </div>
      <div class="right">
        <p>
          <span>Netaji Safe Company</span> is a reputed and trusted name which
          stands for Quality, Durability, Reliability and Affordability. Since
          more than 73 years Netaji Safe Company offers a complete range of
          Security Equipment : Fire and Burglar resisting Safe, Strong Room
          Doors, Safe Deposit Lockers, Coffers, Cupboards for Home / Office /
          Institutes etc.
        </p>
        <p>
          We are based at Kolhapur, Maharashtra India and enjoy support of a
          clientele from all over the globe. The core concentration of our
          company is on the quality of products we manufacture and sell. Thus we
          do more of qualitative business than quantitative one. Being an age
          old company “Netaji Safe” is an established brand in safe and security
          products.
        </p>
        <p>
          The Company was managed by Brothers Mr. Ramalal and Mr.Rikabchand
          Oswal & currently managed by Mr.Devichand Oswal. Providing quality
          work over the past has given us a definite edge over any competition
          in the Market. Our clients always insist on the quality standards we
          have already set high. Thus we only cater to quality clients and don’t
          beleive in quantitative production. We also have a Dealer based at
          Pune. This company called Gopal Agencies is associated with us since
          last 40 years, and looks after the clients based in pune and nearby
          areas.
        </p>
        <p>
          Nearly 3000 safes provided by Netaji are in operation currently
          throughout India. We have also started to cater to international
          market recently and already have more than 25 safes operational in New
          York, Dubai, Mauritius etc. We had served many reputed companies and
          organisations and have huge number of satisfied clients, Maharashtra
          Institute of Technology (M.I.T.) pune, Sinhgad Technical Education
          Society (S.T.E.S.) pune, Reliance Textile Depot, State Bank of India.
          etc to name a few.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#about {
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: 19vw;
  padding-right: 19vw;
  @include for-phone-only {
    padding: 0 20px;
  }
  @include for-tablet-only {
    padding: 0 60px;
  }
  .page-title {
    padding-top: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #bdbdbd;
    margin-top: 60px;
    @include for-phone-only {
      padding-top: 28px;
      padding-bottom: 17px;
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
  .container {
    display: flex;
    margin-top: 30px;
    @include for-phone-only {
      flex-direction: column;
    }
    @include for-tablet-only {
      flex-direction: column;
    }
    .left {
      margin-right: 58px;
      @include for-phone-only {
        width: 100%;
        margin-bottom: 30px;
      }
      @include for-tablet-only {
        width: 100%;
        margin-bottom: 30px;
      }
      .image {
        width: 195px;
        height: 252px;
        @include for-phone-only {
          width: 106px;
          height: 138px;
          margin: 0 auto;
        }
        @include for-tablet-only {
          margin: 0 auto;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: brightness(1.1);
        }
      }
    }
    .right {
      @include for-phone-only {
        width: 100%;
      }
      @include for-tablet-only {
        width: 100%;
      }
      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 162%;
        text-transform: capitalize;
        margin-bottom: 18px;
        span {
          font-weight: 600;
        }
        @include for-phone-only {
          font-size: 11px;
          line-height: 188%;
        }
      }
    }
  }
}
</style>