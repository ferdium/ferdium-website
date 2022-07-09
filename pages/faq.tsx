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
        <FAQEntry title="My computer warns me when I try to install Ferdium">
            <>
              Even though Ferdium code is signed through the appropriate certificates,
              some warnings may still appear.
              <details>
                <summary>On MacOS:</summary>
                Any app that has been downloaded from internet will give you a warning
                asking you to confirm its opening. You can read on that popup that the app
                has been checked for malware by Apple which did not find any. This means
                that the software has been submitted to Apple as part of the build process
                to be notarized. You can thus safely ignore this warning and open the app.
              </details>
              <br/>
              <details>
                <summary>On Windows:</summary>
                You might see the Windows SmartScreen appear, telling you that &quot;Windows
                protected your PC&quot; by preventing an unrecognised app from starting. You
                have the option to click on &quot;More Info&quot; which will display the app name
                as well as the publisher name. Verify that the app is indeed &quot;Ferdium&quot;
                and that Publisher corresponds to &quot;Ambroise Grau&quot; (more details below).
                You can then safely click on &quot;Run anyway&quot; and use the app. If you inadvertently
                clicked on &quot;Don&apos;t run&quot;, you won&apos;t be presented with SmartScreen
                another time. You can however right-click on the executable to go into the file&apos;s
                properties and tick the &quot;Unblock&quot; box at the bottom of the window, which will
                allow its execution by double-click once again.
              </details>
            </>
        </FAQEntry>
        <FAQEntry title="Why do I see the name &quot;Ambroise Grau&quot; as publisher instead of &quot;Ferdium&quot;?">
          <>
            Since Ferdium is not recognised as a legal entity, it is not possible to obtain
            certificates under the organisation&apos;s name. For this reason, the certificates
            to sign releases for both MacOS and Windows have been taken under the personal name
            of one of the project maintainers, namely &quot;Ambroise Grau&quot;. This is the
            name that should appear when verifying the certificate or the publisher name of the
            software.
          </>
        </FAQEntry>
        <FAQEntry title="Which asset should I download?">
          <>
          All the assets are named under the following convention:
          `Ferdium-&lt;target_os&gt;[-&lt;os_option&gt;]-&lt;version_with_channel&gt;[-&lt;target_arch&gt;].&lt;extension&gt;`.
          More precisely for the different OS, you should choose the file appropriately as follows:
            <details>
              <summary>For MacOS:</summary>
              You first need to know if you are using a computer running one of the intel chip or
              one of the more recent arm chip (developed only by Apple and called M1 or M2). If you
              do not know it, check the value in `Menu-&gt;About this Mac`. If you have an arm chip
              you need to look for the assets that contain `arm64` in their name.
              There are then two choices: the first one is to download the appropriate file named
              `Ferdium-mac-bundle-6.x.x*.zip` which will unzip to give you the application directly;
              whilst the second choice is to get the file `Ferdium-mac-6.x.x*.dmg` which will mount and
              allow you to drag the application into your `Applications` folder. Both options are
              valid (though using the dmg is recommended) as long as you make sure to take the
              asset corresponding to your processor.
            </details>
            <br/>
            <details>
              <summary>For Windows:</summary>
              There are 2 types of assets that can be downloaded to get Ferdium on Windows:
              <ol>
                <li>The automatic installer (recommended): assets named `Ferdium-win-AutoSetup-6.x.x*.exe`.
                  These executables will install Ferdium and all its configuration into the AppData\Local
                  folder without prompt. </li>
                <li>The portable version: corresponds to the asset named `Ferdium-win-Portable-6.x.x*.exe`.
                  This is a standalone application that will create the configuration folder in the
                  folder where the executable lies instead of storing it into AppData. </li>
              </ol>
              For both of these, there are assets corresponding to the specific architectures (names ending
              with `-ia32.exe` for 32bits, `-x64.exe` for 64bits, or `-arm64.exe` for arm) which only contain the
              given architecture. If you are unsure which one is best for you, you can download the universal
              version (the asset name which does not include architecture tag between the version and `.exe`).
              This executable includes everything to run on all architectures, which means it will be heavier,
              but will always work as expected. If you are running the installer, it will install only for the
              correct architecture, and you will be able to delete the installer file afterwards.
            </details>
            <br/>
            <details>
              <summary>For Linux:</summary>
              The `Ferdium-6.x.x-*.AppImage` is a binary that can be executed immediately and that
              does not necessitate any installation. Alongside this, there are multiple package files
              for different types of Linux distributions, such as `.freebsd`, `.rpm` and `.deb` (the
              latter having multiple available architecture). All of these configure their local
              configuration into the home folder.
            </details>
            <br/>
            For any developer that wants to build from source, the code is also directly available for
            each release the app can be built simply by running the appropriate scripts found in the
            `script` folder (assuming that the environment has been set up correctly).
          </>
        </FAQEntry>
        <FAQEntry title="Can I run the beta/nightly version alongside the stable one?">
          <>
            In short, no! This is due to the fact that the executables have the same name and are
            installed in the same place, which means that when you install a version it will write
            over the previously installed one, whichever it was previously. This means that you can
            upgrade, downgrade, change the channel you are on by simply installing the version you
            want; but you cannot have the stable release and a development release installed at the
            same time.
          </>
        </FAQEntry>
        <FAQEntry title="Will I lose my configuration by installing a different release?">
          <>
            When you install a release, the configuration folder will not be modified. You can then
            safely install a nightly/beta version to test them and then install the stable, or the
            other way around, and all your services and settings will come with you. (Notice that you
            cannot have multiple releases installed as explained above.)
          </>
        </FAQEntry>
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
