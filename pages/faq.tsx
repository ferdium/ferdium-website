import CommunityLinks from "components/CommunityLinks";
import ExternalLink from "components/ExternalLink";
import FAQEntry from "components/FAQEntry";
import Layout from "components/Layout";
import Section from "components/Section";
import Table from "components/Table";
import React from "react";
import styles from "styles/pages/faq.module.scss";

type Props = {};

function FAQ({}: Props) {
  return (
    <Layout>
      <Section brand wide>
        <h1>Need help?</h1>
        <h2>Find your question below or ask one of our communities</h2>
        <CommunityLinks services={["discord", "github", "reddit"]} />
      </Section>
      <Section>
        <FAQEntry title="I can't find the menu bar anymore">
          <>
            Not seeing the menu bar (File, Edit, View, Etc.) might mean that it is hidden, and it
            can be found by pressing &quot;Alt&quot;.
            <br />
            If you want to prevent it from auto-hiding again, un-tick the option:
            <br /> &quot;View &gt; auto-hide menu bar&quot;
          </>
        </FAQEntry>
        <FAQEntry title="I can't find the service I'm looking for">
          <>
            The &quot;Custom Website&quot; service allows you to add your own website and with the
            icon of your choosing!
            <br />
            <br />
            If you want to help the and add your service to the official Ferdium services, you can
            do so by contributing to{" "}
            <ExternalLink href='https://github.com/ferdium/ferdium-recipes'>
              Ferdium Recipes.
            </ExternalLink>
          </>
        </FAQEntry>
        <FAQEntry title="I want to sync my services and workspaces but I don't want a Ferdium account">
          <>
            You can host your own server with{" "}
            <ExternalLink href='https://github.com/ferdium/ferdium-server'>
              Ferdium Server,
            </ExternalLink>{" "}
            which allows you to create your own account.
          </>
        </FAQEntry>
        <FAQEntry title='Can I report a bug?'>
          <>
            Yes!
            <br />
            <br />
            First, see if your problem has already been reported by searching for it in our Issue
            Tracker.
            <br />
            If you can&apos;t find it, report it below!
            <br />
            <br />
            <Table>
              <Table.Head>
                <Table.Row>
                  <Table.Cell header>Ferdium Client</Table.Cell>
                  <Table.Cell header>Ferdium Server</Table.Cell>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <ExternalLink href='https://github.com/ferdium/ferdium-app/issues'>
                      Issue Tracker
                    </ExternalLink>
                  </Table.Cell>
                  <Table.Cell>
                    <ExternalLink href='https://github.com/ferdium/ferdium-server/issues'>
                      Issue Tracker
                    </ExternalLink>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <ExternalLink href='https://github.com/ferdium/ferdium-app/issues/new/choose'>
                      Report
                    </ExternalLink>
                  </Table.Cell>
                  <Table.Cell>
                    <ExternalLink href='https://github.com/ferdium/ferdium-server/issues/new'>
                      Report
                    </ExternalLink>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </>
        </FAQEntry>
        <FAQEntry title='Can I move my data from Ferdi to Ferdium?'>
          <>
            Yes you can! Follow{" "}
            <ExternalLink href='https://github.com/ferdium/ferdi/blob/main/MIGRATION.md'>
              this
            </ExternalLink>{" "}
            guide.
          </>
        </FAQEntry>
        <FAQEntry title='I am unable to open Ferdium after downloading the installer. What should I do?'>
          <>
            This is because the releases aren&apos;t signed yet. We are still working on getting an
            Apple developer license and a certificate for Windows.
            <br />
            Meanwhile, you could check out these sections for{" "}
            <ExternalLink href='https://github.com/ferdium/ferdium-app#unsigned-nightlies-on-macos'>
              MacOS
            </ExternalLink>{" "}
            and{" "}
            <ExternalLink href='https://github.com/ferdium/ferdium-app#unsigned-nightlies-on-windows'>
              Windows
            </ExternalLink>{" "}
            in README.md to work around it.
          </>
        </FAQEntry>
        <FAQEntry title='My Discord service is not showing properly. What should I do?'>
          <>
            This is because of the User Agent within the service. Discord thinks you are on a mobile
            site instead of a desktop site.
            <br />
            It can be solved by right-clicking on the discord service that you are using from the
            sidebar and choosing `Edit`. Scroll down and update the `User Agent`. A full list of User
            Agents can be found{" "}
            <ExternalLink href='https://developers.whatismybrowser.com/useragents/explore/'>
              here.
            </ExternalLink>{" "}
          </>
        </FAQEntry>
      </Section>
    </Layout>
  );
}

export default FAQ;
