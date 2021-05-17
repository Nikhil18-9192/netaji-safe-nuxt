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
export default {
  name: 'ClientsPage',
  data() {
    return {
      educationClients: [
        'MAHARASHTRA INSTITUTE OF TECHNOLOGY. (M.I.T.)-PUNE.',
        'SHRI CHOUNDESHWARI SHIKSHAN PRASHRAK MANDAL.-ICHALKARANJI.',
        'SINHGAD TECHNICAL EDUCATION SOCIETY.(S.T.E.S)-PUNE.',
        'ATALE SAPRE COLLEGE.- DEVRUK.RATNAGIRI.',
        'PUNE VIDHAYARATHI GARHA.-PUNE.',
        ' R.B.ATAL COLLEGE. GEWRAI.',
        'INSTITUTE OF BUSINESS MANAGEMENT AND RESEARCH.-PUNE.',
        ' NEW COLLEGE-KOLHAPUR.',
        'SWAMI VIVEKANAND COLLEGE.-KOLHAPUR.',
        'RAYAT SHISHKAN SANTHA – KOLHAPUR.',
        'SHRI SADGURU LOKAMANYA VACHNALAYE.-DEVRUK. RATNAGIRI. ',
        'NEW EDUCATION SOCIETY- KOLHAPUR.',
        'NEW ENGLISH SCHOOL.- DEVRUK-RATNAGIRI.',
        'BHARATIYA VIDHYAPEETH – PUNE.',
        'HOLYWOOD ACADEMY.PANHALA-KOLHAPUR.',
        'HOLY CROSS CONVENT – KOLHAPUR.',
        'ST.XAVIER HIGHSCHOOL.KOLHAPUR.',
        'AMBAP GIRLS HIGH SCHOOL – KOLHAPUR.',
        'TATYASAHEB MUSHALE VIDALAYA. ICHALKARANJI. KOLHAPUR.',
      ],
      bankClients: [
        'STATE BANK OF INDIA – KOLHAPUR',
        'THE RATNAKAR BANK LTD.-KOLHAPUR.',
        'RAJARAM BAPU SAHAKARI BANK LTD. PETH-SANGLI.',
        'SHRI MAHALAXMI CO-OP BANK LTD.KOLHAPUR.',
        'THE KURUNDWAD URBAN-CO-OP BANK LTD. KURUNDWAD-KOLHAPUR.',
        'THE KOLHAPUR URBAN CO-OP BANK LTD.KOLHAPUR.',
        'SHRI CHOUNDESHWARI SAHAKARI BANK.-ICHALKARANJI. KOLHAPUR.',
        'LOKMANYA MULTI PURPOSE CREDIT SOCIETY, KOLHAPUR.',
        'SHRI. ADINATH BANK LTD, ICHALKARANJI.',
        'KURUNSHETTY CREDIT SOCIETY, MUDLAGI.',
        ' BUDHAGAON CO-OP CREDIT SOCIETY.-BORAGAN. CHIKODI.',
        'BHARATIYA BANK LTD.-ISLAMPUR.SANGLI.',
        'KOLHAPUR DISTRICT CO-OP BANK LTD.KOLHAPUR.',
        'SHANKAR NAGARI CO-OP BANK LTD.- NANDED.',
        'ANAND NAG.SAHAKARI PATH SANSTHA.SHIRUR.PUNE.',
        'DHULUR V.K.S.SOCIETY.-MAPSA.GOA.',
        'SUBHARDHA LOCAL AREA BANK LTD.KOLHAPUR.',
        ' SHRI YESHWANTRAO CHAVAN GR.PATH SANSTHA.KOLHAPUR.',
        'KAMLAJADEVI GRAMIN.PATH SANSTHA.AMBEGAON.PUNE.',
        'JIJAMATA MAHALIA SAHAKARI BANK LTD.PUNE.',
        'PUNE’S PEOPLE CO-OP BANK LTD.PUNE.',
        ' DHAMVEER SAMBHAJI NAG.PATH SANSTHA.MANCHAR.PUNE.',
        'SHRI GANESH NAGARI PATH SANSTHA.BACHANI.SANGLI.',
        'EX-ARMY CO-OP BANK LTD.SAWANTWADI. ',
        'SHRI DATH NAG.SAH.PATH SANSHTA.KADHGAON.PUNE.',
        'JIVAN SINDHU NAG.SAH.PATH SANSTHA .VENGURLA.',
        'SHRI JUGWALLABH PRASWANATH CO-OP BANK LTD.SANGLI.',
        'JIVAJI SAHAKARI BANK LTD.-ICHALKARANJI. KOLHAPUR.',
        ' SHRI DHANLAXMI CO-OP CREDIT SOCIETY.- RAIBHAG.BELGAUM.',
        'SHRI BERESHWARA CO-OP BANK LTD.RAIBHAG.BELGAUM.',
        ' SHRI GANESH NAG.SAH.PATH SANSTHA.MURGUD.KOLHAPUR.',
        ' ADINATH CO-OP BANK LTD.ICHALKARANJI.KOLHAPUR.',
        ' P.K./ BALASAHEB SAWANT NAG.PATH.SANSTHA.KUDAL.SAWANTWADI.',
        ' SHERLA GRAMIN.NAG.PATH SANSTHA.-SHERLA.SAWANTWADI.',
        ' LAXMI BUHUDHSI SAH.NAG.PATH SANSTHA.LATUR.',
        ' SHRI SIDDIVINAYAK.ZILLA.BANK LTD.SANGLI.',
        ' SHRI MANDURA PANCHKRUSHI.SAH.PATH SANSTHA.SWANTWADI.',
        ' SHIVRAJ NAGARI SAHAKARI PATH SANSTHA.KAGAL KOLHAPUR.',
        ' SHRI. KALIKADEVI NAG.SAH.PATH SANSTHA.KARAD.',
        ' SHRI MAHALAXMI URBAN CO-OP CREDIT SOCIETY.MUDALGI-GOKAK.',
        ' SHRI LAXMI-PARVATI SAH. PATH SANSTHA. BAVACHI. SANGLI.',
        ' MENON & MENON CO-OP CREDIT SOCIETY.KOLHAPUR.',
        ' THE GOVERNMENT CO-OP BANK LTD. KOLHAPUR.',
        ' SHRI ARIHANT CREDIT SOCIETY LTD. BORAGAN-CHICKODI.',
        ' SHRI LAXMINARYAN PATH SANSTHA-MURGUD-KOLHAPUR.',
        ' THE VADGAON SARAF NAG.PATH SANSTHA.PETH VADGAON-KOLHAPUR.',
        ' SHREE PARSWANATH GRAMIN SAH. PATH SANSTHA – AHMEDNAGAR.',
        ' SHREE KAD SIDHESHWAR CO-OP. SOC. CHIKODI.',
        ' KADOLI VYAPARI GRAMIN SAH. PATH SANSTHA KADOLI',
      ],
    }
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
    padding: 45px 75px 0 75px;
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
        column-gap: 75px;
        li {
          font-size: 12px;
          line-height: 253.5%;
          text-transform: capitalize;
        }
      }
    }
  }
  .banks {
    padding: 45px 75px 0 75px;
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
        column-gap: 75px;
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