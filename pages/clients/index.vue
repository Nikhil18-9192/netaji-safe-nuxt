<template>
  <div id="clients">
    <div class="page-title">
      <h1>Clients</h1>
    </div>
    <div class="education">
      <div class="title">
        <img src="/education.svg" alt="education icon" />
        <h4>EDUCATION SOCIETIES / INSTITUTIONS</h4>
      </div>
      <div class="list">
        <ul>
          <li v-for="(item, i) in educationClients" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="banks">
      <div class="title">
        <img src="/banks.svg" alt="banks icon" />
        <h4>BANKS & CREDIT SOCIETIES –</h4>
      </div>
      <div class="list">
        <ul>
          <li v-for="(item, i) in bankClients" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { educationClients, bankClients } from '@/utils'
export default {
  name: 'ClientsPage',
  computed: {
    educationClients() {
      return educationClients
    },
    bankClients() {
      return bankClients
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
  .page-title {
    padding-top: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #bdbdbd;
    h1 {
      font-weight: 600;
      font-size: 18px;
      line-height: 161%;
      letter-spacing: 0.22em;
      text-transform: uppercase;
    }
  }
  .education {
    padding: 45px 55px 0 55px;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      h4 {
        font-weight: 600;
        font-size: 14px;
        line-height: 151.5%;
      }
      img {
        width: 55px;
        height: 55px;
        object-fit: contain;
        margin-right: 17px;
      }
    }
    .list {
      margin-top: 62px;
      padding-bottom: 35px;
      border-bottom: 1px solid #bdbdbd;
      ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 0;
        column-gap: 40px;
        li {
          font-size: 12px;
          line-height: 253.5%;
          text-transform: capitalize;
        }
      }
    }
  }
  .banks {
    padding: 45px 55px 0 55px;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      h4 {
        font-weight: 600;
        font-size: 14px;
        line-height: 151.5%;
      }
      img {
        width: 55px;
        height: 55px;
        object-fit: contain;
        margin-right: 17px;
      }
    }
    .list {
      margin-top: 62px;

      ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 0;
        column-gap: 40px;
        li {
          font-size: 12px;
          line-height: 253.5%;
          text-transform: capitalize;
        }
      }
    }
  }
}
</style>