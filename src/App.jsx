// app.jsx
import React from "react";
import { Button, Input, Card, Table, Modal, Form, Switch, Slider, Progress, Select, Checkbox } from "antd";

const App = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Address", dataIndex: "address", key: "address" },
  ];
  const data = [
    { key: "1", name: "John Brown", age: 32, address: "New York No. 1 Lake Park" },
    { key: "2", name: "Jim Green", age: 42, address: "London No. 1 Lake Park" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Ant Design Components with Tailwind</h1>

      {/* Button */}
      <Button
        type="primary"
        className="bg-blue-500 hover:bg-blue-700 mb-4"
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </Button>

      {/* Input */}
      <Input placeholder="Enter your name" className="mb-4 border border-blue-400 rounded-lg" />

      {/* Card */}
      <Card title="Example Card" className="mb-4 shadow-lg border border-blue-300">
        This is a custom Ant Design card.
      </Card>

      {/* Table */}
      <Table columns={columns} dataSource={data} className="mb-4 shadow-md" />

      {/* Modal */}
      <Modal
        title="Custom Modal"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        className="rounded-lg"
      >
        <p>This is a Tailwind-styled modal.</p>
      </Modal>

      {/* Form */}
      <Form layout="vertical" className="mb-4">
        <Form.Item label="Username">
          <Input placeholder="Username" className="border border-blue-300" />
        </Form.Item>
        <Form.Item label="Password">
          <Input.Password placeholder="Password" className="border border-blue-300" />
        </Form.Item>
      </Form>

      {/* Switch */}
      <div className="mb-4">
        <Switch className="bg-blue-300" />
      </div>

      {/* Slider */}
      <Slider className="mb-4" defaultValue={30} />

      {/* Progress */}
      <Progress percent={70} className="mb-4" strokeColor="#3b82f6" />

      {/* Select */}
      <Select
        placeholder="Select an option"
        options={[
          { label: "Option 1", value: "1" },
          { label: "Option 2", value: "2" },
        ]}
        className="mb-4 w-full"
      />

      {/* Checkbox */}
      <Checkbox className="text-blue-500">Check me</Checkbox>
    </div>
  );
};

export default App;