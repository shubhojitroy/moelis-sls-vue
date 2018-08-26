<template>
    <div class="home">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    MOELIS AUSTRALIA SECURED LOAN SERIES
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <p>
                        The Information Memorandum "<strong>IM</strong>"
                        is an important document that
                        you should read in its entirety before deciding
                        whether to invest in the Moelis
                        Australia Secured Loan Series "<strong>Fund</strong>"
                        (as referred to below and set out in the IM).
                        If you have questions about whether Moelis Australia
                        Secured Loan Series is suitable for you, please contact
                        your stockbroker, accountant or other professional adviser.
                    </p>
                    <p>
                        By accessing the IM (by clicking on the "Download Information
                        Memorandum" button below), you acknowledge that you have read
                        and accept the terms set out on this website.
                    </p>
                    <p>
                       The IM is available on this website by clicking the link below.
                       A paper copy of the IM will be provided on request free of charge
                       by calling Moelis Australia Asset Management on 1800 634 850
                       (within Australia) or +61 2 9290 9681 (outside Australia).
                    </p>
                </div>
            </div>
        </div>
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    APPLICATIONS
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <p>
                        Applications for units in the Moelis Australia Secured
                        Loan Series will only be accepted where they are made by
                        completing the online application form available through
                        this website and by paying for the units through BPAY. <strong>Only
                        wholesale clients as defined in section 761G of the Corporations Act
                        2001 (Cth) are entitled to participate in the Offer.
                        The Trustee may require additional information from you
                        to verify your investor status</strong>.
                    </p>
                </div>
            </div>
        </div>
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    ACKNOWLEDGEMENT
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <p>
                        By clicking the "Download Information Memorandum"
                        button below and accessing the IM on this website,
                        you represent, warrant and agree that:
                    </p>
                    <ol>
                        <li>
                            you are 18 years of age or over;
                        </li>
                        <li>
                            you are a wholesale client as defined in section
                            761G of the Corporations Act 2001 (Cth);
                        </li>
                        <li>
                            you are not a resident of the United States or currently
                            located in the United States, are not acting for the account
                            or benefit of a person in the United States or any other foreign
                            person and will not make a copy of the IM available to, or release
                            or distribute a copy of the IM to, or for the account or benefit of,
                            any person in the United States or in any other jurisdiction in which,
                            or to any other person to whom, it would be unlawful to do so
                            (Ineligible Persons);
                        </li>
                        <li>
                            you are not acting as a nominee for, or otherwise for the account
                            or benefit of, any Ineligible Persons;
                        </li>
                        <li>
                            you have received, read and understood the IM;
                        </li>
                        <li>
                            the information in the IM is not financial product advice and does
                            not take into account your investment objectives,
                            financial situation or particular needs;
                        </li>
                        <li>
                            the Application Form constitutes an irrevocable
                            offer to invest in the Offer;
                        </li>
                        <li>
                            monies deposited in respect of the Application Form,
                            are not associated with crime, terrorism, money
                            laundering or terrorism financing, no will monies received
                            from your account have any such association.
                        </li>
                    </ol>
                    <p>
                        The IM should not be construed as financial, taxation,
                        legal or other advice. If you do not fully understand
                        this IM or are in doubt as to how to deal with it,
                        you should seek professional guidance from your
                        stockbroker, lawyer, accountant or other professional adviser
                        before deciding whether to invest.
                    </p>
                    <hr>
                    <div class="level">
                        <div class="level-left">
                            <a href="../assets/prospectus/Moelis-Australia-Secured-Loan-Series-Information-Memorandum-August-2018.pdf" tag="button" class="button" @click="!loginView" target="_blank">
                                DOWNLOAD INFORMATION MEMORANDUM&nbsp;&#x2913;
                            </a>
                        </div>
                        <div class="level-right">
                            <router-link :to="loginView" :disabled="!loginView" class="button" >
                                PROCEED&nbsp;&#x27A4;
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
  data() { 
      return {
          
      };
  },
  computed: {
      loginView() {
       return this.disabled ? '/login' : '';   
      }
  },
};
</script>

<style lang="scss">
.home {
    margin: 1.5rem 0;
}
.card {
    max-width: 75%;
    margin: 0 auto;
    color: #476978;
}
.card-header-title {
    color: #41535b;
}
.button {
    box-shadow: 0 0.5rem 1rem 0 rgba(10,10,10,.2);    
    transition-duration: 172ms;
    &:hover {
        box-shadow: 0 3rem 3rem -1.25rem rgba(10,10,10,.1);
        transform: translateY(-.5rem);
    }
}
</style>
