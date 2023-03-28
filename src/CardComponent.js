import { Fragment, useState } from 'react';
import { Modal, Button, Form, Input,Tabs } from 'antd';
import ReactPlayer from "react-player";

const { TabPane } = Tabs;
function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState(true);
  const handleTabChange = (key) => {
    setActiveTab(key);
  };
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setModalVisible(true);
  };

  const handleAddCard = () => {
    form.resetFields();
    setSelectedCard(null);
    setModalVisible(true);
  };

  const handleSaveCard = (values) => {
    const newCard = {
      ...values,
      id: selectedCard ? selectedCard.id : Date.now(),
    };
    const newCards = selectedCard
      ? cards.map((card) => (card.id === selectedCard.id ? newCard : card))
      : [...cards, newCard];
    setCards(newCards);
    setModalVisible(false);
  };

  const handleDeleteCard = () => {
    const newCards = cards.filter((card) => card.id !== selectedCard.id);
    setCards(newCards);
    setModalVisible(false);
  };
  return (
    <Fragment>
    <Tabs activeKey={activeTab} onChange={handleTabChange}>
      <TabPane tab="Entertainment Videos" key="tab1">
        <cards title="Card Title 1">
          <p>Entertainment Videos content goes here.</p>
        </cards>
      </TabPane>
      <TabPane tab="Education Videos" key="tab2">
        <cards title="Card Title 2">
          <p>Education Videos content goes here.</p>
        </cards>
      </TabPane>
      <TabPane tab="News Videos" key="tab3">
        <cards title="Card Title 3">
          <p>News Videos content goes here.</p>
        </cards>
      </TabPane>
    </Tabs>

    <div className="container">
      <Button onClick={handleAddCard}>Add Card</Button>

      {cards.map((card) => (
        <div className="card" key={card.id} onClick={() => handleCardClick(card)}>
          <h2>{card.name}</h2>
        </div>
      ))}

      <Modal
        title={selectedCard ?.name}
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSaveCard}
          initialValues={selectedCard}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter a name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Video Link"
            name="videoLink"
            rules={[{ required: true, message: 'Please enter a video link' }]}
          >
            <Input />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Save
          </Button>

          {selectedCard && (
            <Button type="danger" onClick={handleDeleteCard} style={{ marginLeft: 8 }}>
              Delete
            </Button>
          )}
        </Form>
        <ReactPlayer
          url={selectedCard?.videoLink}
          playing={true}
          controls
          width="100%"
          height="360px"
        />
      </Modal>
    </div>
    </Fragment>
  );
}

export default App;
