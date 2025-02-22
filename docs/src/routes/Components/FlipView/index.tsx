import * as React from "react";
import * as PropTypes from "prop-types";

import ComponentDetail from "components/ComponentDetail";
import * as docEntry from "react-uwp/FlipView/index.doc.json";
import * as readmeText from "!raw!./README.md";

import CodeExample from "components/CodeExample";

import SimpleExample from "./SimpleExample";
import * as SimpleExampleCode from "!raw!./SimpleExample";
import * as SimpleExampleDesc from "!raw!./SimpleExample.md";

export default class FlipView extends React.Component<any> {
  static contextTypes = { theme: PropTypes.object };

  render() {
    const {
      location,
      params,
      route,
      router,
      routeParams,
      routes,
      screenType,
      ...attributes
    } = this.props;

    return (
      <ComponentDetail
        readmeText={readmeText as any}
        docEntry={docEntry}
      >
        <CodeExample
          title="Simple Examples"
          direction="column"
          code={SimpleExampleCode as any}
          description={SimpleExampleDesc as any}
          doubleThemeStyle={{
            padding: 20
          }}
          useSingleTheme
        >
          <SimpleExample screenType={screenType} />
        </CodeExample>
      </ComponentDetail>
    );
  }
}
