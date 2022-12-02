import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import { useQuery } from '@apollo/client';
//import { QUERY_MATCHUPS } from '../utils/js/queries';
import { Col, Row, Button } from 'antd';
import { PlusCircleFilled, EditFilled, DeleteFilled } from '@ant-design/icons';
import { Layout } from 'antd';
import '../utils/css/Dashboard.css';
import CreateModal from '../components/dashboard/NewPost';
import EditModal from '../components/dashboard/EditPost';

const { Sider, Content } = Layout;

const Dashboard = ({ open, onOK, onCancel }) => {
  const [createPost, setCreatePost] = useState(false);
  const [editPost, setEditPost] = useState(false);

  // const { loading, data} = useQuery(QUERY_MATCHUPS, {
  //     fetchPolicy: 'no-cache'
  // });

  // const matchupList = data?.matchups || [];

  const newPostClick = () => {
    setCreatePost(!createPost);
  };

  const editPostClick = () => {
    setEditPost(!editPost);
  };

  return (
    <main className="mainContent">
      {createPost && <CreateModal />}
      {editPost && <EditModal />}
      <Layout>
        <Sider>
          <Col className="D-Col">
            <Col className="Sider-Row-Box">
              <Row className="Box-Top-Row">
                <Button onClick={newPostClick}>
                  <PlusCircleFilled />
                </Button>
              </Row>
            </Col>
          </Col>
        </Sider>
        <Layout>
          <Content className="D-Content">
            <Row className="D-Content-Row" wrap={true}>
              <Row className="D-Content-Row-Post">
                <Row className="D-Post-Row">
                  <Col className="D-Post-Title">
                    <h3>Qu'est-ce que le Lorem Ipsum?</h3>
                  </Col>
                  <Col className="D-Post-Edit">
                    <p className="D-Post-Edit-E">
                      <EditFilled onClick={editPostClick} />
                    </p>
                    <p className="D-Post-Edit-D">
                      <DeleteFilled />
                    </p>
                  </Col>
                </Row>
                <Row className="D-Post-Text">
                  <p>
                    Le Lorem Ipsum est simplement du faux texte employé dans la
                    composition et la mise en page avant impression. Le Lorem
                    Ipsum est le faux texte standard de l'imprimerie depuis les
                    années 1500, quand un imprimeur anonyme assembla ensemble
                    des morceaux de texte pour réaliser un livre spécimen de
                    polices de texte.
                  </p>
                </Row>
                <Row className="D-Post-Date">
                  <p>Nov 29th, 2022</p>
                </Row>
              </Row>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </main>
  );
};

export default Dashboard;
