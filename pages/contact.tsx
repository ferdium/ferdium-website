import Head from "components/Head";
import Layout from "components/Layout";
import Section from "components/Section";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <Layout>
      <Head title='Ferdium | Contact and support' />
      <Section>
        <div>
          <div>
            <h1>Contact and support</h1>
          </div>

          <h3>
            <strong>Having issues with Ferdium? We can help you out!</strong>
          </h3>
          <p>
            Ferdium, like any open source project, is maintained by a bunch of volunteers. If
            you are having some issues with the software, you can always try to contact the team.
            The easiest way to do this, is by having a look on <a href="https://github.com/ferdium">our
            GitHub page</a>.
          </p>
          <p>
            If you have found a bug in the Ferdium application itself, of have an idea for a possible
            improvement, you can always open an issue on the <a href="https://github.com/ferdium/ferdium-app/issues">GitHub
            bug tracker</a>. When doing so, be sure to follow the guidelines in the description of the new
            issue when creating it.
          </p>
          <p>
            If you wish to participate in the Ferdium project, you are always welcome to join. We can use help
            in the areas of application development, website design and development, or even just people willing to
            test Ferdium and report issues they&apos;ve found. You are free to create a <a href="https://github.com/ferdium/ferdium-app/pulls">pull
            request on GitHub</a> and we will evaluate it. If you just want to hang out and talk to the rest of the
            team, <a href="https://discord.gg/xqA9vTP6">join our Discord server</a>.
          </p>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
