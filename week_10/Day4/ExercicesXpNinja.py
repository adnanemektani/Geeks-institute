class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    # Method باش تعيط لشي رقم آخر
    def call(self, other_phone):
        call_string = f"{self.phone_number} called {other_phone.phone_number}"
        print(call_string)
        self.call_history.append(call_string)

    # Method باش تشوف تاريخ المكالمات
    def show_call_history(self):
        print(f"\n--- Call History for {self.phone_number} ---")
        for call in self.call_history:
            print(call)

    # Method باش تصيفط ميساج (كنخزنو الـ Data في Dictionary)
    def send_message(self, other_phone, content):
        message_data = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        # كيتزاد الميساج عند اللي صيفط وعند اللي استقبل
        self.messages.append(message_data)
        other_phone.messages.append(message_data)
        print(f"Message sent from {self.phone_number} to {other_phone.phone_number}")

    # كاع الميساجات اللي صيفطتيهم
    def show_outgoing_messages(self):
        print(f"\n--- Outgoing Messages from {self.phone_number} ---")
        for msg in self.messages:
            if msg["from"] == self.phone_number:
                print(f"To: {msg['to']} | Content: {msg['content']}")

    # كاع الميساجات اللي وصلوك
    def show_incoming_messages(self):
        print(f"\n--- Incoming Messages for {self.phone_number} ---")
        for msg in self.messages:
            if msg["to"] == self.phone_number:
                print(f"From: {msg['from']} | Content: {msg['content']}")

    # الميساجات من رقم محدد
    def show_messages_from(self, other_phone):
        print(f"\n--- Messages from {other_phone.phone_number} to {self.phone_number} ---")
        for msg in self.messages:
            if msg["from"] == other_phone.phone_number and msg["to"] == self.phone_number:
                print(f"Content: {msg['content']}")

# --- Test Your Code ---

# 1. إنشاء هواتف جديدة
my_phone = Phone("0611223344")
friend_phone = Phone("0655667788")

# 2. تجربة المكالمات
my_phone.call(friend_phone)
my_phone.show_call_history()

# 3. تجربة الرسائل
my_phone.send_message(friend_phone, "Hello Adnan! How is the MERN stack going?")
my_phone.send_message(friend_phone, "Don't forget the USB for the project.")

# 4. عرض الرسائل الواردة والصادرة
friend_phone.show_incoming_messages()
my_phone.show_outgoing_messages()

# 5. عرض رسائل من شخص محدد
friend_phone.show_messages_from(my_phone)