<template>
  <div id="clients">
    <div class="page-title">
      <h1 data-aos="fade-right" data-aos-duration="900" data-aos-offset="200">
        Clients
      </h1>
    </div>
    <LogoImages />
    <div class="education">
      <div
        class="title"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-offset="200"
      >
        <img src="/education.svg" alt="education icon" />
        <h4>EDUCATION SOCIETIES / INSTITUTIONS</h4>
      </div>
      <div
        class="list"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-offset="200"
      >
        <ul>
          <li v-for="(item, i) in educationClients" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="education">
      <div
        class="title"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-offset="200"
      >
        <img src="/banks.svg" alt="banks icon" />
        <h4>BANKS & CREDIT SOCIETIES</h4>
      </div>
      <div
        class="list"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-offset="200"
      >
        <ul>
          <li v-for="(item, i) in bankClients" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="education">
      <div
        class="title"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-offset="200"
      >
        <img src="/commercial.svg" alt="commercial icon" />
        <h4>COMMERCIAL</h4>
      </div>
      <div
        class="list"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-offset="200"
      >
        <ul>
          <li v-for="(item, i) in commercial" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="education">
      <div
        class="title"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-offset="200"
      >
        <img src="/jewellers.svg" alt="jewellers icon" />
        <h4>JEWELLERS</h4>
      </div>
      <div
        class="list"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-offset="200"
      >
        <ul>
          <li v-for="(item, i) in jewellers" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="banks">
      <div
        class="title"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-offset="200"
      >
        <img src="/temples.svg" alt="temples icon" />
        <h4>TEMPLES & TRUST</h4>
      </div>
      <div
        class="list"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-offset="200"
      >
        <ul>
          <li v-for="(item, i) in temples" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {
  educationClients,
  bankClients,
  temples,
  jewellers,
  commercial,
} from '@/utils'
export default {
  name: 'ClientsPage',
  computed: {
    educationClients() {
      return educationClients
    },
    bankClients() {
      return bankClients
    },
    temples() {
      return temples
    },
    jewellers() {
      return jewellers
    },
    commercial() {
      return commercial
    },
  },
}
</script>

<style lang="scss" scoped>
#clients {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 187px;
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
  .education {
    padding: 45px 55px 0 55px;
    @include for-phone-only {
      padding: 20px 0 0 0;
    }
    @include for-tablet-only {
      padding: 30px 25px 0 25px;
    }
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      @include for-phone-only {
        justify-content: flex-start;
      }
      h4 {
        font-weight: 600;
        font-size: 14px;
        line-height: 151.5%;
        @include for-phone-only {
          font-size: 12px;
          line-height: 176.5%;
        }
      }
      img {
        width: 55px;
        height: 55px;
        object-fit: contain;
        margin-right: 17px;
        @include for-phone-only {
          width: 35px;
          height: 30px;
        }
      }
    }
    .list {
      margin-top: 62px;
      padding-bottom: 35px;
      border-bottom: 1px solid #bdbdbd;
      @include for-phone-only {
        margin-top: 28px;
      }
      ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 0;
        column-gap: 40px;
        @include for-phone-only {
          grid-template-columns: repeat(1, 1fr);
        }
        li {
          font-size: 12px;
          line-height: 253.5%;
          text-transform: capitalize;
          @include for-phone-only {
            font-size: 11px;
            line-height: 169.5%;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
  .banks {
    padding: 45px 55px 0 55px;
    @include for-phone-only {
      padding: 20px 0 0 0;
    }
    @include for-tablet-only {
      padding: 30px 25px 0 25px;
    }
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      @include for-phone-only {
        justify-content: flex-start;
      }
      h4 {
        font-weight: 600;
        font-size: 14px;
        line-height: 151.5%;
        @include for-phone-only {
          font-size: 12px;
          line-height: 176.5%;
        }
      }
      img {
        width: 55px;
        height: 55px;
        object-fit: contain;
        margin-right: 17px;
        @include for-phone-only {
          width: 35px;
          height: 30px;
        }
      }
    }
    .list {
      margin-top: 62px;
      @include for-phone-only {
        margin-top: 28px;
      }
      ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 0;
        column-gap: 40px;
        @include for-phone-only {
          grid-template-columns: repeat(1, 1fr);
        }
        li {
          font-size: 12px;
          line-height: 253.5%;
          text-transform: capitalize;
          @include for-phone-only {
            font-size: 11px;
            line-height: 169.5%;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>