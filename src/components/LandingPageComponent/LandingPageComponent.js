/**
 * @Author: harsha
 * @Date:   2020-08-17T14:22:05+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-08-17T22:51:56+02:00
 */
import React, { Fragment, Profiler } from 'react';
import { ContentContainer, DataContainer } from './LandingPageStyles';
import { getMetrics } from '../../helpers/utils';
import { Row, Col, Button, Avatar } from 'antd';
import { UserOutlined, BarChartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const LandingPageComponent = () => {
  return (
    <Fragment>
      <ContentContainer>
        <DataContainer>
          <Row gutter={16}>
            <Col span={12}>
              <Profiler
                id="Performance Monitoring Button"
                onRender={getMetrics}>
                <Avatar
                  style={{ margin: 16 }}
                  size={64}
                  icon={<BarChartOutlined />}
                />
                <Link to="/perf">
                  <Button style={{ margin: 16 }} type="primary">
                    Performance Monitoring
                  </Button>
                </Link>
              </Profiler>
            </Col>
            <Col span={12}>
              <Profiler id="View List" onRender={getMetrics}>
                <Avatar
                  style={{ margin: 16 }}
                  size={64}
                  icon={<UserOutlined />}
                />
                <Link to="/comments">
                  <Button style={{ margin: 16 }} type="primary">
                    View List
                  </Button>
                </Link>
              </Profiler>
            </Col>
          </Row>
          ,
        </DataContainer>
      </ContentContainer>
    </Fragment>
  );
};
