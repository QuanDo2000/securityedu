# Bluetooth Technology Security Vulnerabilities

## 1. Background information on Bluetooth technology.
Bluetooth technology is a wireless communication technology that can be used to transmit data over a short distance (typically 10 meters). It is a low-power technology widely used in mobile devices, such as smartphones, headsets, keyboards, mice, smart watches, smart home, and other devices. There are several versions of Bluetooth, the latest of which is Bluetooth 5.3. Each release incorporates the functionality of the previous release while adding new features and enhancements. The Bluetooth technology function has a certain degree of security, but security issues still need to be paid attention to. Bluetooth technology itself uses encryption and authentication to secure communications between devices. However, suppose that if your device is hacked, there is a high chance that your data and even your device can be controlled and accessed by criminals. Therefore, making sure your devices and Bluetooth connections remain secure always becomes a concern.

## 2. Bluetooth protocol security vulnerabilities
KNOB Attack was discovered in March 2018 and reported to Bluetooth SIG (Bluetooth Special Interest Group) and CERT in October of the same year.
The problem lies in the stage of LMP entropy (entropy) negotiation, because this part of the negotiation process is not protected by the ECDH key, so it is vulnerable to man-in-the-middle attacks, malicious attackers can set the entropy as small as possible, so that quickly blast out Kc in the back and decrypt the Bluetooth transmission data in real time. This is why the attack is called KNOB (Key Negotiation of Bluetooth) Attack. The vulnerability is numbered CVE-2019-9506. Because it is a design vulnerability in the Bluetooth core protocol, it affects many Bluetooth devices, such as Broadcom, CYW, Apple and other Bluetooth chips. The repair method needed to wait for the SIG to update the standard at that time, and the update and advancement of the standard was relatively slow, so this process will inevitably be used by criminals. The direct harm of this vulnerability is to cause a man-in-the-middle attack on the Bluetooth link, resulting in the leakage or hijacking of transmitted information. The actual attack scenarios such as the Bluetooth keyboard of the mobile device or the Bluetooth mouse should be relatively affected.


<img width="416" alt="image" src="https://user-images.githubusercontent.com/52442224/227391990-50a6e689-d7fa-4ce4-a4be-447994578c7b.png">

## 3. Prevent Bluetooth phishing attacks
To prevent Bluetooth phishing attacks, we recommend the following measures:


### 3.1 Connect unknown Bluetooth device.
Do not connect to unknown Bluetooth devices or Wi-Fi hotspots. Especially in public places, repeatedly confirm the connection in the connected familiar device to avoid phishing attacks in some public places. Only connect to those devices or hotspots that you know or trust.
### 3.2 Disable the automatic connection function.
Disable the auto-connect feature. It can even be left off in scenarios where Bluetooth devices are not in use. This prevents your device from connecting to any available Bluetooth devices within a certain range.
### 3.3 Using encrypted Bluetooth connection.
Use an encrypted Wi-Fi or Bluetooth connection. This will make it harder for an attacker to steal your data if you accidentally connect to a phishing Bluetooth.
### 3.4 Install Secure Bluetooth Software
Install security software. This software can monitor your Bluetooth connection and block unwanted connections.
### 3.5 Update the equipment in time.
Update your device and applications. It's also the best general way to keep your mobile device safe. New versions fix security holes and bugs.

Francozappa. (n.d.). Francozappa/Knob: Key Negotiation of Bluetooth (KNOB) attacks on Bluetooth BR/EDR and ble [CVE-2019-9506]. GitHub. Retrieved February 18, 2023, from https://github.com/francozappa/knob 
CVE-2019-9506. CVE. (n.d.). Retrieved February 18, 2023, from https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-9506 



