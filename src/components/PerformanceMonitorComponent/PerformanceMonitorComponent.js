/**
 * @Author: harsha
 * @Date:   2020-08-17T16:16:00+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-08-17T22:40:26+02:00
 */

import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ContentContainer } from './PerformanceMonitorStyles';
import { setCommentsData } from '../../actions';
import { Statistic, Card, Row, Col, Button } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

export class PerformanceMonitorComponent extends Component {
  componentDidMount() {
    const { setCommentsData } = this.props;
    const setData = JSON.parse(localStorage.getItem('profilingStack'));
    setCommentsData(setData);
  }

  render() {
    const { profilingStack } = this.props;
    const renderProfiling =
      profilingStack &&
      profilingStack.map(data => {
        console.log(data, 'data');
        return (
          <div className="site-statistic-demo-card" key={data.actualTime}>
            <Row gutter={16}>
              <Col span={12}>
                <Card>
                  <Col span={12}>
                    <Statistic title="Component Name" value={data.compName} />
                  </Col>
                  <Col span={12}>
                    <Statistic title="Mode" value={data.mode} />
                  </Col>
                  <Statistic
                    title="Actual Time"
                    value={data.actualTime}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<ArrowUpOutlined />}
                  />
                  <Statistic
                    title="Base Time"
                    value={data.baseTime}
                    precision={2}
                    valueStyle={{ color: '#cf1322' }}
                    prefix={<ArrowDownOutlined />}
                  />
                </Card>
              </Col>
            </Row>
          </div>
        );
      });
    return (
      <Fragment>
        <ContentContainer>{renderProfiling}</ContentContainer>
      </Fragment>
    );
  }
}

function mapStateToProps({ commentsStack }) {
  return {
    profilingStack: commentsStack.profilingDetails,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCommentsData }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PerformanceMonitorComponent);
