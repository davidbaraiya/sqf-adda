import { Box, Container, Typography } from '@mui/material'
import BreadCrumbs from './Breadcrumbs'
import './policy.css'
import { useEffect } from 'react'

const TermsCondition = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const BreadCrumbsData = {
    name: 'Terms and Condition',
    path: '/terms_and_condition',
  }

  return (
    <section className="terms-condition pb">
      <BreadCrumbs BreadCrumbsData={BreadCrumbsData} />
      <Container>
        <Box mt={10}>
          <Typography variant="h4" mb={2} color="#ff5a3c">
            Terms and Conditions
          </Typography>

          <p>
            We Squarefoot Adda (hereinafter referred to as"Company") provide a
            platform for property-related services and information to our valued
            clients. The term"Client" refers to a person, irrespective of
            gender, firm, company, or entity who utilizes our services or
            accesses our website www.squarefootadda.com. These terms and
            conditions govern the use of our services and website by our clients
            and all users.
          </p>

          <Typography variant="h6" mb={1}>
            A. SCOPE OF AGREEMENT
          </Typography>

          <p>
            The Company acts as a service provider and relies on the information
            provided by various builders/developers for the projects listed on
            our website. This information is obtained through written
            communication, their representatives, advertisements in print and
            electronic media, and other reliable sources.
          </p>

          <p>
            Clients are advised to regularly visit our website and the
            respective builders/developers' websites for updates and
            developments related to real estate.
          </p>

          <p>
            In the event that a client intends to cancel a property booked
            through the Company, an administrative charge will be applicable for
            issuing a No Objection Certificate (NOC). The administrative charge
            may vary depending on the project, developer, and other relevant
            factors. The Company reserves the right to withhold the issuance of
            the NOC until the administrative charges are paid by the client.
          </p>

          <p>
            It is the client's responsibility to notify the Company if they
            transfer the booked property to a third party or create any
            third-party interest in the property.
          </p>

          <p>
            The credit note issued by the Company for a specific project is
            non-transferable. If the client sells/transfers the property or
            creates any third-party interest, they must notify the Company
            within seven days of such transfer. The Company's liability under
            the credit note is solely towards the client and not towards
            subsequent transferees or any entity in whose favor the client has
            created such interest. The Company will disburse the amount under
            the credit note to the person named on the credit note, subject to
            the conditions mentioned therein. The Company reserves the right to
            deduct TDS (Tax Deducted at Source) as per applicable laws. If the
            client includes the credit note in the cost of the unit while
            creating any third-party interest, the Company shall not be
            responsible for releasing the payment to such third party under any
            circumstances.
          </p>

          <p>
            The Company is not responsible for delays, cost increases, changes
            in layout, levying of PLC (Preferential Location Charge), scraping
            of projects, changes in builder policies, changes in government
            policies, judicial/administrative orders, variations between
            commitments and deliverables, or any other circumstances that may
            occur from time to time.
          </p>

          <p>
            The Company, as a service provider, is not involved in the
            decision-making process of builders/developers or obtaining
            statutory approvals. The Company is not liable for any
            misrepresentation made by the builder/developer at any time.
          </p>

          <p>
            If the Company has issued a credit note and does not receive the
            commission due from the developer, the Company is not liable to
            disburse the credit note to the client. The disbursement of the
            credit note is subject to the Company receiving the
            brokerage/commission from the developer and fulfilling the
            conditions mentioned in the credit note. If the Company does not
            receive payment from the developer for any reason, it is not liable
            to honor the credit note. In the event of partial commission
            received from the developer, the Company will release a
            proportionate amount to the client.
          </p>

          <p>
            The Company is not responsible for any interest charges imposed by
            the developer for overdue payments or any cancellation of the unit
            under any circumstances.
          </p>

          <p>
            The client is responsible for verifying the accuracy of information
            provided in email communications and promptly notifying the Company
            of any inaccuracies. The Company will not be held liable for any
            losses resulting from erroneous information or its consequences if
            the client fails to notify the Company immediately.
          </p>

          <p>
            The Company does not consider verbal commitments allegedly made by
            employees unless they are made by an authorized person on the
            Company's letterhead. The Company is not bound by commitments made
            by former employees unless they were employed at the time the
            commitment was made. Commitments made by existing employees from
            personal email IDs are not entertained.
          </p>

          <p>
            The client agrees that the Company may use their booking data for
            advertising and promotional purposes.
          </p>

          <p>
            The Company may temporarily suspend the functionality of the website
            for maintenance or other reasons. Any information accessed during
            the suspension period may not be updated and shall not bind the
            Company.
          </p>

          <p>
            For queries, clarifications, or grievances, the client may contact
            the Customer Care Department of the Company at PHONE NO. +91
            9990908821 or email at EMAIL ID: hello@squarefootadda.com.
          </p>

          <p>
            The client acknowledges and agrees to comply with the rules, bylaws,
            and guidelines set by the respective builder/developer for each
            project. The Company has no influence over these rules. If the
            client's query requires a response from the developer, the Company
            will coordinate with the developer and forward the response.
            However, the Company is not liable if the response is unsatisfactory
            to the client.
          </p>

          <p>
            The Company does not accept cash payments from clients. Payments are
            only accepted through duly signed cheques, demand drafts, or
            banker's cheques made out to the concerned developer for the
            respective projects, after the client fills the booking form issued
            by the developer.
          </p>

          <p>
            The Company is not responsible for cancellations arising from
            incomplete/invalid documents or non-sanction/delay in the loan from
            any financial institution.
          </p>

          <p>
            Non-receipt of email communication does not excuse non-performance
            of obligations or ignorance of policies or other aspects mentioned
            in the email.
          </p>

          <p>
            Any disputes shall be subject to the exclusive jurisdiction of the
            courts in Uttar Pradesh. The laws of [jurisdiction] shall govern any
            dispute arising from the use of the website.
          </p>

          <Typography variant="h6" mb={1}>
            B. COLLECTION OF PERSONAL AND OTHER INFORMATION
          </Typography>

          <p>
            The user acknowledges that the Company collects and stores their
            personal information, including but not limited to user names,
            passwords, email addresses, names, addresses, age, date of birth,
            sex, nationality, browsing history, and uploaded images or other
            information. This information is used to provide targeted services,
            improve the website's user experience, and customize and enhance the
            website's functionality.
          </p>

          <p>
            The user acknowledges that the Company may automatically track
            certain information based on their IP address and website behavior.
            This information is used for internal research, analysis of user
            demographics, interests, and behavior, and to provide personalized
            content.
          </p>

          <p>
            If the user purchases products/services from the website, the user
            consents to the Company collecting information about their buying
            behavior and trends.
          </p>

          <p>
            If the user posts messages/reviews/feedback on the website, the user
            acknowledges that such information will be collected, stored, and
            used by the Company for dispute resolution, customer support,
            troubleshooting, and other lawful purposes. The Company may also
            disclose such information to judicial or governmental authorities if
            required by law.
          </p>

          <p>
            The user acknowledges that any information provided by them or
            collected by the Company may be compiled and stored in a file/folder
            specifically created for the user, and the user expressly consents
            to this.
          </p>

          <p>
            While browsing certain sections of the website does not require
            registration, certain activities may require the user to provide
            personal information for registration. The user acknowledges that
            the contact information provided may be used to send offers and
            promotions from the Company.
          </p>

          <p>
            The user acknowledges that the Company may request them to complete
            optional online surveys or write reviews for products/services. The
            user's demographic and preference information may be used to
            customize the website and provide targeted content.
          </p>

          <p>
            The user acknowledges that the Company may remove or not store
            content, reviews, surveys, or feedback submitted by the user without
            cause or notification.
          </p>

          <Typography variant="h6" mb={1}>
            C. COOKIES
          </Typography>

          <p>
            <b>a)</b> The user acknowledges that the website uses cookies, which
            are small pieces of information stored by a web server on a web
            browser. Cookies help the browser remember specific user
            information, such as login identification and preferences. The user
            consents to the use of cookies by the website.
          </p>

          <p>
            <b>b)</b> The user acknowledges that the website uses cookies for
            web page analysis, measuring promotional effectiveness, trust, and
            safety. Some features of the website require the use of cookies. The
            user may decline cookies if their browser allows, but certain
            features may not be accessible as a result.
          </p>

          <Typography variant="h6" mb={1}>
            D. DIVULGING/SHARING OF PERSONAL INFORMATION
          </Typography>

          <p>
            <b>a)</b> The user acknowledges that the Company may share their
            personal information with corporate entities and affiliates for
            purposes such as detecting and preventing identity theft, fraud, and
            illegal acts, correlating related accounts, and facilitating joint
            or co-branded services.
          </p>

          <p>
            <b>b)</b> The user acknowledges that the Company may disclose
            personal information if required by law or in good faith belief that
            such disclosure is necessary to respond to legal processes, enforce
            the Terms and Policy, protect the rights and safety of users, or
            comply with requests from law enforcement or governmental
            authorities.
          </p>

          <p>
            <b>c)</b> The user acknowledges that the Company may share or sell
            some or all of their personal information if the Company's assets
            merge with or are acquired by another business entity, or in the
            event of reorganization, amalgamation, or restructuring of the
            Company's business. The new entity will be bound by the Terms and
            Policy.
          </p>

          <Typography variant="h6" mb={1}>
            E. User's Consent
          </Typography>

          <p>
            By using the website and/or providing information to the Company
            through the website, the user consents to the collection and use of
            their information as described in this Policy, including
            sharing/divulging of information by the Company as per the Privacy
            Policy.
          </p>

          <Typography variant="h6" mb={1}>
            F. AD SERVERS
          </Typography>

          <p>
            The website may display ads from other companies. Ad server
            companies may collect information such as domain type, IP address,
            and clickstream information when users interact with these ads.
          </p>

          <Typography variant="h6" mb={1}>
            G. COPYRIGHT AND TRADEMARK POLICY
          </Typography>

          <p>
            All content included on the website, such as text, graphics, logos,
            images, and software, is the property of the Company and protected
            by copyright laws. Unauthorized use of the content is prohibited.
          </p>

          <Typography variant="h6" mb={1}>
            H. SUSPENSION OF USER ACCESS AND ACTIVITY
          </Typography>

          <p>
            The Company may, at its sole discretion, limit or suspend a user's
            access to the website or terminate their membership without notice
            or cause if the user breaches these Terms, provides false or
            inaccurate information, or their actions may harm other users or the
            Company.
          </p>

          <Typography variant="h6" mb={1}>
            I. THIRD-PARTY WEBSITES
          </Typography>

          <p>
            The website may contain links to other websites. The Company does
            not accept liability for the misuse of information by websites
            linked to from our website. The user is encouraged to read the
            privacy statements of these websites.
          </p>

          <Typography variant="h6" mb={1}>
            J. INDEMNIFICATION AND LIMITATION OF LIABILITY
          </Typography>

          <p>
            The user agrees to indemnify and hold the Company and its
            affiliates, officers, directors, consultants, agents, and employees
            harmless from any losses, liabilities, claims, damages, costs, and
            expenses arising from the user's breach of these Terms or violation
            of third-party rights. The Company and its affiliates shall not be
            liable for any special, incidental, indirect, consequential, or
            punitive damages arising from the use of the website or services.
          </p>

          <Typography variant="h6" mb={1}>
            K. ENTIRE AGREEMENT
          </Typography>

          <p>
            These Terms, along with the Policy, constitute the entire agreement
            between the user and the Company regarding the subject matter and
            supersede any other communications, representations, or agreements
            relating thereto.
          </p>

          <Typography variant="h6" mb={1}>
            L. WAIVER
          </Typography>

          <p>
            The failure of either party to enforce any provision of these Terms
            shall not be deemed a waiver of such provision, and the provision
            shall remain in full force and effect.
          </p>

          <Typography variant="h6" mb={1}>
            M. SEVERABILITY
          </Typography>

          <p>
            If any provision of these Terms is deemed invalid, illegal, or
            unenforceable, the remaining provisions shall remain valid and
            enforceable to the fullest extent permitted by law. The parties
            shall endeavor to reform the invalid provision to preserve the
            original intent and rights of the parties.
          </p>

          <Typography variant="h6" mb={1}>
            N. DISCLAIMER
          </Typography>

          <p>
            The information provided on the website is obtained from public
            sources, project marketing materials, and other reliable sources.
            The Company strives to ensure the accuracy and completeness of the
            information, but there is a possibility of errors or omissions.
            Clients are advised to verify the information from the respective
            builders/developers before making any decisions. The Company, its
            directors, employees, agents, and representatives shall not be
            liable for any losses or damages incurred based on the information
            provided on the website. The Company does not guarantee the
            allotment of registration under RERA (Real Estate Regulation and
            Development Act) for the projects listed on the website. The actual
            properties may vary from the representations shown in pictures or
            photos. Clients are encouraged to verify the completeness and
            accuracy of information from the respective state's RERA website.
          </p>
        </Box>
      </Container>
    </section>
  )
}

export default TermsCondition
