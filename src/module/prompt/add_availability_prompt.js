var prompt = [
    {
        title: 'Please add your availibility',
        callback_id: 'add_availability_prompt',
        attachment_type: 'default',
        actions: [
            {
                "name":"add",
                "text": "Add",
                "value": "add",
                "type": "button",
            }
        ]
    }
]

module.exports= {add_availability_prompt: prompt};
