import * as React from "react";
import * as PropTypes from "prop-types";

import ComponentDetail from "components/ComponentDetail";
import MarkdownRender from "react-uwp/MarkdownRender";
import * as docEntry from "react-uwp/ListView/index.doc.json";
import * as readmeText from "!raw!./README.md";
import * as itemTypeText from "!raw!./ListItemType.md";

import CodeExample from "components/CodeExample";

import SimpleExample from "./SimpleExample";
import * as SimpleExampleCode from "!raw!./SimpleExample";
import * as SimpleExampleDesc from "!raw!./SimpleExample.md";

export default class ListView extends React.Component<any> {
  static contextTypes = { theme: PropTypes.object };

  render() {
    const {
      location,
      params,
      route,
      router,
      routeParams,
      routes,
      ...attributes
    } = this.props;

    return (
      <ComponentDetail
        readmeText={readmeText as any}
        docEntry={docEntry}
      >
        <CodeExample
          title="Simple Examples"
          code={SimpleExampleCode as any}
          description={SimpleExampleDesc as any}
          doubleThemeStyle={{ padding: 20 }}
          useSingleTheme
        >
          <SimpleExample />
        </CodeExample>
        <MarkdownRender text={itemTypeText as any} />
      </ComponentDetail>
    );
  }
}
