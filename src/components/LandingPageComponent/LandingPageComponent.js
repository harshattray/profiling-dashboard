/**
 * @Author: harsha
 * @Date:   2020-08-17T14:22:05+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-08-17T16:15:17+02:00
 */
import React, { Fragment } from 'react';
import { ContentContainer, DataContainer } from './LandingPageStyles';
import { Statistic, Row, Col, Button, Avatar } from 'antd';
import { UserOutlined, BarChartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const LandingPageComponent = () => {
  return (
    <Fragment>
      <ContentContainer>
        <DataContainer>
          <Row gutter={16}>
            <Col span={12}>
              <Avatar
                style={{ margin: 16 }}
                size={64}
                icon={<BarChartOutlined />}
              />
              <Button style={{ margin: 16 }} type="primary">
                Performance Monitoring
              </Button>
            </Col>
            <Col span={12}>
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
            </Col>
          </Row>
          ,
        </DataContainer>
      </ContentContainer>
    </Fragment>
  );
};
