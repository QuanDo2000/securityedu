# NFC Security Vulnerabilities

## 1. NFC background

- Although NFC plays an important role in people's daily life, some users may not be aware of the NFC function in their devices. Or say you don't know your mobile device has this feature. But you have indeed used it in many scenarios in your life, such as mobile payment on buses, or Apple Pay or PayPal used at checkout in restaurants. Both use NFC technology. NFC has become an indispensable component of mobile devices in today's mobile devices. Like Bluetooth, NFC uses radio frequency technology to realize communication between devices. Among the NFC in mobile devices, the most likely security risk is the Reader/Write scenario, referred to as R/W.

## 2. NFC Vulnerabilities

- In the context of NFC, we mentioned that the security risks in the reader/Write scenario are very large, especially for mobile devices with the android system. CVE-2021-0870 is a high-risk RCE vulnerability in NFC. The official said: "The vulnerability in this section could enable a remote attacker using a specially crafted transmission to execute arbitrary code within the context of a privileged process."

This vulnerability allows some criminals to execute arbitrary codes in the NFC process, in this way, they can invade your mobile phone and obtain information. Although the NFC vulnerability is fixed, who knows how many 0-day vulnerabilities there are. So, you can't just enjoy the convenience brought by NFC, but ignore the risks it increases.

## 3 NFC measures

- 3.1 Only turn on the NFC function when you need to use it and try to set it to off when not in use. The operation steps can be found directly in Settings, then NFC.

* 3.2 Since the working distance of the NFC function is generally within ten centimeters, try to put the mobile device in the bag instead of holding it in the outdoors or in crowded shopping malls, which can also effectively reduce the risk of NFC leakage.




N. A. Chattha, "NFC — Vulnerabilities and defense," 2014 Conference on Information Assurance and Cyber Security (CIACS), Rawalpindi, Pakistan, 2014, pp. 35-38, doi: 10.1109/CIACS.2014.6861328.
Android Security Bulletin-October 2021  :   Android Open Source Project (no date) Android Open Source Project. Available at: https://source.android.com/docs/security/bulletin/2021-10-01 (Accessed: February 14, 2023). 


