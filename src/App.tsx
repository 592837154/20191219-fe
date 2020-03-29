import React, { Component } from 'react';
import { Upload, message, Button, Icon, Layout, Menu, Breadcrumb, List, Skeleton, Avatar, Modal, Steps, Form, Input } from 'antd';
import './App.css';
const { Header, Content, Footer } = Layout;
const { Step } = Steps;
interface IProps {
  form: any;
}
interface IState {
  breadcrumbs: string[];
  visible: boolean;
  currentStep: number;
  detail: any;
  loading: boolean;
  listData: any[];
}
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const BASEURL = '127.0.0.1';
const PORT = '323';
const URL = BASEURL + ':' + PORT;

const UPLOAD = {
  name: 'file',
  action: `http://${URL}/upload`,
  headers: {
    authorization: 'authorization-text',
  },
};
const TABS = [
  {
    label: '家具',
    value: 'furniture',
    breadcrumbs: ['主页', '列表']
  },
  {
    label: '其他',
    value: 'other',
    breadcrumbs: ['主页', '其他']
  }
]
class App extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      breadcrumbs: TABS[0].breadcrumbs,
      visible: false,
      currentStep: 0,
      detail: {},
      loading: false,
      listData: []
    }
  }
  public onChange = (info: any) => {
    if (info.file.status !== 'uploading') {
    }
    if (info.file.status === 'done') {
      console.log(info.file.response);
      this.setState({
        currentStep: 2
      });
      message.success('成功');
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
  public changeMenu = (a: any) => {
    const result: any = TABS.find((item: any) => a.key === item.value);
    this.setState({
      breadcrumbs: result.breadcrumbs
    })
  }
  public showModal = () => {
    this.setState({
      visible: true
    })
  }
  public hideModal = () => {
    this.setState({
      visible: false,
      currentStep: 0,
      detail: {}
    })
  }
  public handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.setState({
          currentStep: 1,
          detail: values
        })
      }
    });
  };
  public componentDidMount() {
    this.setState({
      loading: true
    }, () => {
      const BASEURL = '127.0.0.1';
      const PORT = '323';
      const URL = BASEURL + ':' + PORT;
      fetch(`http://${URL}/data`)
        .then(function (response) {
          return response.json();
        })
        .then((myJson) => {
          this.setState({
            loading: false,
            listData: myJson
          })
          console.log(myJson);
        });
    })

  }
  public renderTabs = () => {
    const { breadcrumbs, loading, listData } = this.state;
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[TABS[0].value]}
            style={{ lineHeight: '64px' }}
            onClick={this.changeMenu}
          >
            {
              TABS.map((item: any) => {
                return <Menu.Item key={item.value}>{item.label}</Menu.Item>;
              })
            }
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="breadcrumbbox">
            <Breadcrumb style={{ margin: '16px 0' }}>
              {
                breadcrumbs.map((item: any) => {
                  return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>;
                })
              }
            </Breadcrumb>
            <Button onClick={this.showModal} type="primary">
              <Icon type="plus-square" />新增
            </Button>
          </div>
          <div style={{ background: '#fff', padding: 24, minHeight: 730 }}>
            <List
              className="demo-loadmore-list"
              itemLayout="horizontal"
              dataSource={listData}
              renderItem={({ name, des, filename }: any, index: number) => {
                console.log(`${URL}/${filename}`);
                
                return (
                  <List.Item
                  actions={[<span key="list-loadmore-edit">编辑</span>, <span key="list-loadmore-more">删除</span>]}
                >
                  <Skeleton avatar title={false} loading={loading} active>
                    <div>{index}</div>
                    <List.Item.Meta
                      avatar={
                        <Avatar size="large" src={`http://${URL}/${filename}`} />
                      }
                      title={<span>{name}</span>}
                      description={des}
                    />
                  </Skeleton>
                </List.Item>
                )
              }}
            />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>让生活更美好 !</Footer>
      </Layout>
    )
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { visible, currentStep, detail } = this.state;
    return (
      <div >
        {
          this.renderTabs()
        }
        {
          visible ?
            <Modal
              title="上传信息"
              visible={visible}
              onCancel={this.hideModal}
              footer={
                <Button onClick={this.hideModal} type="primary">
                  确定
  </Button>
              }
            >
              <Steps current={currentStep} size="small">
                <Step title="填写信息" />
                <Step title="上传图片" />
                <Step title="成功!" />
              </Steps>
              <div>
                {
                  currentStep === 0 ?
                    <div >
                      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Form.Item label="名称">
                          {getFieldDecorator('name', {
                            rules: [
                              {
                                required: true,
                                message: '请输入名称!',
                              },
                            ],
                          })(<Input />)}
                        </Form.Item>
                        <Form.Item label="描述">
                          {getFieldDecorator('des', {
                            rules: [
                              {
                                required: true,
                                message: '请输入描述!',
                              },
                            ],
                          })(<Input />)}
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                          <Button type="primary" htmlType="submit">
                            下一步
          </Button>
                        </Form.Item>
                      </Form>
                    </div>
                    : null

                }
                {
                  currentStep === 1 ?
                    <div>

                      <Upload {...UPLOAD} onChange={this.onChange} data={detail}>
                        <Button>
                          <Icon type="upload" /> 上传
</Button>
                      </Upload>

                    </div> : null

                }
                {
                  currentStep === 2 ?
                    <div>
                      11123

                 </div> : null
                }
              </div>

            </Modal> : null
        }

      </div>
    );
  }
}


export default Form.create({ name: 'register' })(App);