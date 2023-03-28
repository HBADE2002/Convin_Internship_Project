import { Tabs } from 'antd';

const { TabPane } = Tabs;

function Buckets() {
  return (
    <Tabs>
      <TabPane tab="Bucket 1" key="1">
        Content of bucket 1
      </TabPane>
      <TabPane tab="Bucket 2" key="2">
        Content of bucket 2
      </TabPane>
      <TabPane tab="Bucket 3" key="3">
        Content of bucket 3
      </TabPane>
    </Tabs>
  );
}

export default Buckets;
