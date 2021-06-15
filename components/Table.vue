<template>
  <div
    class="size-table"
    data-aos="fade-up"
    data-aos-duration="900"
    data-aos-offset="200"
  >
    <client-only>
      <table>
        <tr class="heading">
          <th v-for="(heading, i) in tableHeader" :key="i">
            {{ heading }}
          </th>
        </tr>
        <tr class="table-row" v-for="(item, i) in weights" :key="i">
          <td>{{ i + 1 }}</td>
          <td>{{ item.outer }}</td>
          <td style="max-width: 225px">{{ item.inner }}</td>
          <td>{{ item.weight }}</td>
        </tr>
      </table>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'TableComponent',
  props: ['weights', 'tableHeader'],
}
</script>

<style lang="scss" scoped>
.size-table {
  width: 100%;
  table {
    width: 791px;
    margin: 0 auto;
    border-spacing: 0 5px;
    @include for-phone-only {
      width: 100%;
    }
    @include for-tablet-only {
      width: 100%;
    }
    th {
      border-top: 9px solid #1f1f1f;
      background: #cb2929;
      height: 47px;
      font-weight: 500;
      font-size: 13px;
      line-height: 173.69%;
      color: #fff;
      @include for-phone-only {
        font-size: 11px;
        height: 65px;
        &:nth-child(1) {
          padding-left: 10px;
        }
      }
    }
    td {
      text-align: center;
      background: #f4f4f4;
      height: 47px;
      font-weight: 500;
      font-size: 13px;
      line-height: 173.69%;
      @include for-phone-only {
        font-size: 11px;
      }
    }
  }
}
</style>