import {
  AlertFadelessExample,
  UncontrolledAlertFadelessExample
} from '../examples/AlertFadeless';

import AlertUncontrolledDismissExample from '../examples/AlertUncontrolledDismiss';
import { PrismCode } from 'react-prism';
/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import SectionTitle from '../UI/SectionTitle';
import ToastDismissExample from '../examples/ToastDismiss';
import ToastExample from '../examples/Toast';
import ToastHeaderIconExample from '../examples/ToastHeaderIcon';

const ToastExampleSource = require('!!raw-loader!../examples/Toast');

const ToastHeaderIconExampleSource = require('!!raw-loader!../examples/ToastHeaderIcon');

const ToastDismissExampleSource = require('!!raw-loader!../examples/ToastDismiss');

const AlertUncontrolledDismissExampleSource = require('!!raw-loader!../examples/AlertUncontrolledDismiss');

const AlertFadelessExampleSource = require('!!raw-loader!../examples/AlertFadeless');

export default class ToastsPage extends React.Component {
  render() {
    return (
      <div>
        <div className="docs-example">
          <ToastExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">{ToastExampleSource}</PrismCode>
        </pre>

        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
            {`Toast.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string, // default: 'success'
  isOpen: PropTypes.bool,  // default: true
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // Controls the transition of the toast fading in and out
  // See [Fade](/components/fade/) for more details
  transition: PropTypes.shape(Fade.propTypes),
}`}
          </PrismCode>
        </pre>

        <SectionTitle>Header icons</SectionTitle>
        <div className="docs-example">
          <ToastHeaderIconExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ToastHeaderIconExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Dismissing</SectionTitle>
        <div className="docs-example">
          <ToastDismissExample buttonLabel="Show toast" />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ToastDismissExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
