---
title: 'Dropdown'
cssPrefix: 'pf-c-dropdown'
---

## Simple dropdown

import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator, DropdownPosition, DropdownDirection, KebabToggle } from '@patternfly/react-core';
import { ThIcon } from '@patternfly/react-icons';

```js
import React from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator, DropdownPosition, DropdownDirection, KebabToggle } from '@patternfly/react-core';
import { ThIcon } from '@patternfly/react-icons';

class SimpleDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    this.onSelect = event => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated Action
      </DropdownItem>
    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={<DropdownToggle onToggle={this.onToggle}>Dropdown</DropdownToggle>}
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
    );
  }
}
```

## Dropdown (disabled)
```js
import React from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator, DropdownPosition, DropdownDirection, KebabToggle } from '@patternfly/react-core';
import { ThIcon } from '@patternfly/react-icons';

class DisabledDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    this.onSelect = event => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated Action
      </DropdownItem>
    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={
          <DropdownToggle isDisabled onToggle={this.onToggle}>
            Dropdown
          </DropdownToggle>
        }
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
    );
  }
}
```

## Dropdown (position right)
```js
import React from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator, DropdownPosition, DropdownDirection, KebabToggle } from '@patternfly/react-core';
import { ThIcon } from '@patternfly/react-icons';

class PositionRightDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    this.onSelect = event => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated Action
      </DropdownItem>
    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        position={DropdownPosition.right}
        toggle={<DropdownToggle onToggle={this.onToggle}>Dropdown</DropdownToggle>}
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
    );
  }
}
```

## Dropdown (direction up)
```js
import React from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator, DropdownPosition, DropdownDirection, KebabToggle } from '@patternfly/react-core';
import { ThIcon } from '@patternfly/react-icons';

class DirectionUpDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    this.onSelect = event => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated Action
      </DropdownItem>
    ];
    return (
      <Dropdown
        direction={DropdownDirection.up}
        onSelect={this.onSelect}
        toggle={<DropdownToggle onToggle={this.onToggle}>Dropdown</DropdownToggle>}
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
    );
  }
}
```

## Dropdown with kebab
```js
import React from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator, DropdownPosition, DropdownDirection, KebabToggle } from '@patternfly/react-core';
import { ThIcon } from '@patternfly/react-icons';

class KebabDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    this.onSelect = event => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated Action
      </DropdownItem>
    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={<KebabToggle onToggle={this.onToggle} />}
        isOpen={isOpen}
        isPlain
        dropdownItems={dropdownItems}
      />
    );
  }
}
```

## Dropdown (icon only)
```js
import React from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator, DropdownPosition, DropdownDirection, KebabToggle } from '@patternfly/react-core';
import { ThIcon } from '@patternfly/react-icons';

class IconDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    this.onSelect = event => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated Action
      </DropdownItem>
    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={
          <DropdownToggle iconComponent={null} onToggle={this.onToggle}>
            <ThIcon />
          </DropdownToggle>
        }
        isOpen={isOpen}
        isPlain
        dropdownItems={dropdownItems}
      />
    );
  }
}
```

## Dropdown panel

The Basic Dropdown is provided for flexibility in allowing various content within a dropdown.

```js
import React from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator, DropdownPosition, DropdownDirection, KebabToggle } from '@patternfly/react-core';
import { ThIcon } from '@patternfly/react-icons';

class DropdownPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    this.onSelect = event => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={<DropdownToggle onToggle={this.onToggle}>Expanded Dropdown</DropdownToggle>}
        isOpen={isOpen}
      >
        <div>[Panel contents here]</div>
      </Dropdown>
    );
  }
}
```

## React router link usage

A react-router Link may be wrapped by DropdownItem or used directly within Dropdown. Here's some example HTML:

```nolive
/** Wrapped Link for DropdownItem list **/
<DropdownItem key="link">
  <Link to={'/'}>Link</Link>
</DropdownItem>

/** Direct child of Dropdown **/
<Dropdown
onSelect={this.onSelect}
toggle={
  <DropdownToggle onToggle={this.onToggle}>
    Expanded Dropdown
  </DropdownToggle>
}
isOpen={isOpen}
>
  <Link to={'/'}>Link</Link>
</Dropdown>
```
