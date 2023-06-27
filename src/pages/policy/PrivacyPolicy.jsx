import { Box, Container, Typography } from '@mui/material'
import BreadCrumbs from './Breadcrumbs'
import './policy.css'
import { useEffect } from 'react'

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const BreadCrumbsData = {
    name: 'Privacy Policy',
    path: '/privacy_and_policy',
  }

  return (
    <section className="terms-condition pb">
      <BreadCrumbs BreadCrumbsData={BreadCrumbsData} />
      <Container>
        <Box mt={10}>
          <Typography variant="h4" mb={2} color="#ff5a3c">
            Privacy Policy
          </Typography>

          <p>
            At Squarefoot Adda, we value your privacy and are committed to
            protecting your personal information. This Privacy Policy outlines
            how we collect, use, and safeguard the information you provide to us
            when using our website. By accessing and using Squarefoot Adda, you
            consent to the practices described in this policy.
          </p>

          <Typography variant="h6" mb={1}>
            COLLECTION OF INFORMATION:
          </Typography>
          <p>We collect information from you in several ways, including:</p>

          <p>
            Information You Provide: When you register an account, fill out
            forms, or interact with our website, we may collect personal
            information such as your name, email address, phone number, and
            property preferences. This information is voluntarily provided by
            you.
          </p>

          <p>
            Website Usage Information: Like many websites, we collect
            non-personal information about your interactions with our website.
            This may include your IP address, browser type, operating system,
            referring website, pages visited, and the dates and times of your
            visits. We use this information for analytical purposes to improve
            our website's functionality and user experience.
          </p>

          <Typography variant="h6" mb={1}>
            USE OF INFORMATION:
          </Typography>
          <p>We use the collected information for the following purposes:</p>

          <p>
            Providing Services: We may use your personal information to provide
            you with the services you requested, such as property listings,
            newsletters, or notifications related to your property search.
          </p>

          <p>
            Communication: We may use your contact information to communicate
            with you regarding your inquiries, property updates, promotional
            offers, or other relevant information related to Squarefoot Adda.
            You can opt-out of receiving promotional emails at any time.
          </p>

          <p>
            Site Improvement: We analyze non-personal information to monitor and
            improve our website's performance, content, and user experience.
          </p>

          <p>
            Legal Compliance: We may disclose your personal information if
            required by law or in good faith belief that such action is
            necessary to comply with legal obligations, protect our rights, or
            investigate potential violations.
          </p>

          <Typography variant="h6" mb={1}>
            PROTECTION OF INFORMATION:
          </Typography>
          <p>
            Squarefoot Adda takes reasonable precautions to protect your
            personal information from unauthorized access, disclosure,
            alteration, or destruction. We implement security measures such as
            encryption, secure socket layer (SSL) technology, firewalls, and
            regular security assessments to safeguard your data. However, please
            note that no method of transmission over the internet or electronic
            storage is completely secure, and we cannot guarantee absolute
            security.
          </p>

          <Typography variant="h6" mb={1}>
            THIRD-PARTY LINKS:
          </Typography>
          <p>
            Our website may contain links to third-party websites, services, or
            applications that are not owned or controlled by Squarefoot Adda. We
            are not responsible for the privacy practices or content of these
            third-party sites. We encourage you to review the privacy policies
            of any third-party websites you visit.
          </p>

          <Typography variant="h6" mb={1}>
            COOKIES:
          </Typography>
          <p>
            Squarefoot Adda uses cookies, which are small text files stored on
            your device, to enhance your browsing experience. Cookies enable us
            to remember your preferences, analyze website usage, and provide
            personalized content. You can modify your browser settings to reject
            cookies or notify you when a cookie is being sent. However, please
            note that disabling cookies may impact the functionality of our
            website.
          </p>

          <Typography variant="h6" mb={1}>
            CHANGES TO THE PRIVACY POLICY:
          </Typography>
          <p>
            Squarefoot Adda reserves the right to modify or update this Privacy
            Policy at any time. We will notify you of any significant changes by
            posting a prominent notice on our website or sending you an email.
            It is your responsibility to review the Privacy Policy periodically.
          </p>

          <Typography variant="h6" mb={1}>
            CONTACT INFORMATION:
          </Typography>
          <p>
            If you have any questions or concerns about our Privacy Policy or
            the handling of your personal information, please contact us at{' '}
            <a href="mailto:hello@squarefootadda.com">
              hello@squarefootadda.com{' '}
            </a>{' '}
            or <a href="tel: +919990908821"> +919990908821, </a>
          </p>

          <p>
            By using Squarefoot Adda, you signify your acceptance of this
            Privacy Policy. If you do not agree with the terms outlined in this
            policy, please refrain from using our website.
          </p>
        </Box>
      </Container>
    </section>
  )
}

export default PrivacyPolicy
