import CommunityLinks from "components/CommunityLinks";
import ExternalLink from "components/ExternalLink";
import FAQEntry from "components/FAQEntry";
import Layout from "components/Layout";
import Section from "components/Section";
import Table from "components/Table";
import React from "react";

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
            which allows you to create your own account. If you chose the accountless option when signing
            up in Ferdium for the first time, you can follow{" "}
            <ExternalLink href='https://github.com/ferdium/ferdium-app/blob/develop/INTERNAL_SERVER.md#exporting-backups'>
              these steps
            </ExternalLink>{" "}
            to create backups manually.
          </>
        </FAQEntry>
        <FAQEntry title="I want to switch from a Franz/Ferdi/Ferdium account to the accountless option">
          <>
            This is a great idea since it looks like you don&apos;t want your data to be stored on someone
            else&apos;s cloud. It also means that you can be shielded from any outages (both voluntary and
            involuntary) of the server in question. All you will need to do is to take a backup of your settings
            from your current server (answered in the above faq), and then logout in Ferdium, and choose the
            appropriate button in the login page. Once you get into the accountless option, you can follow
            the similar instructions as above to import your configurations, services and workspaces.
          </>
        </FAQEntry>
        <FAQEntry title='Where can I report a bug?'>
          <>
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
