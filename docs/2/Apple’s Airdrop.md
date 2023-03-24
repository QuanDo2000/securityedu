

# Apple’s Airdrop

## 1. Airdrop background information
 I believe users of Apple devices should be very familiar with AirDrop, or at least heard of this feature. It is a unique function under Apple's iOS, iPadOS and macOS systems, and is used to share files between multiple devices. Just use this function to transfer files to your other devices or your friend's Apple devices. At the 2013 WWDC conference, AirDrop was added to iOS devices, and devices below iPhone 5 do not support the AirDrop application. This communication occurs via Apple Wireless Direct Link "action frames" and "data frames," using a generated link-local IPv6 address instead of the Wi-Fi chip's fixed MAC address. This communication takes place over Apple Wireless Direct Link 'Action Frames' and 'Data Frames' using generated link-local IPv6 addresses instead of the Wi-Fi chip's fixed MAC address. (wikipedia, 2023)

## 2. Airdrop case
- There are hidden dangers in not turning off AirDrop on the iPhone, or keeping it turned on for a long time. And the default setting of AirDrop is turned on, and any device can send files to your device when it is turned on. Hackers can send files containing malware to steal your information or take control of your device. In your life, you will receive some images or texts sent by some people through the AirDrop function. You may have experienced or heard of this. But it is also possible for hackers to intercept personal information within milliseconds. Researchers at the Technical University of Darmstadt conducted an in-depth study of the vulnerability and came to a conclusion. The conclusion is that Apple AirDrop has a two-way vulnerability. Regardless of whether it is receiving or sending, as long as it is turned on, hackers can crack the user's email address, phone number, etc. within a few milliseconds. The personal information intercepted by hackers is very likely to be used for precise phishing attacks, fraud, etc. Of course, it is also very possible to directly sell personal information. AirDrop transmits via bluetooth and wifi. Among them, Bluetooth "handshakes" and Wi-Fi "transmits". During the entire transmission process, the participation of public network connections may not be required. The bug is in the Bluetooth "handshake phase".
* In short, in the transmission confirmation stage, the function is to determine whether the existing sender's device should be connected to other nearby devices, so AirDrop will broadcast the local Bluetooth signal, which includes the sender's phone number and email Cryptographic hash of the address. When you set it to use this function only for the address book, then the encrypted hash value will be used to match with the address book information, and a mutual authentication handshake will be performed when the match is successful. So when you don't have any settings, then these hashes will be stolen in public places or in scanners installed by some criminals. These encrypted values are then cracked by hackers. For example, DAN GOODIN said: "Hashes, of course, can't be converted back into the cleartext that generated them, but depending on the amount of entropy or randomness in the cleartext, they are often possible to figure out. Hackers do this by performing a "brute-force attack," which throws huge numbers of guesses and waits for the one that generates the sought-after hash. There is a risk of information leakage. Therefore, we need to make certain settings for AirDrop in these Apple devices.

## 3. Measures that can be taken
After reading the above case, we should have a new understanding of AirDrop, so in order to protect the personal information under the device, we should take the following measures.
- 3.1 Avoid using in public places: In public places, such as public transportation or shopping malls, it is best to turn off AirDrop to avoid information leakage.

* 3.2 Restriction of reception
Set this feature to only address book contacts. The specific method is to find the general function in the settings of the device, and then find the receiving option of setting AirDrop, so as to allow the contacts in the address book.

+ 3.3 Close AirDrop
When you don't need to use AirDrop, it's better to turn it off, which can reduce the possibility of information leakage. Of course, this method may be a bit cumbersome and cumbersome, so according to personal needs, it is recommended to use only contacts transfer.

##
Dan Goodin - Apr 24, 2021 3:21 pm U. T. C., Dianne Hackborn Ars Centurion jump to post, & unequivocal Ars Tribunus Militum et Subscriptor jump to post. (2021, April 24). Apple's airdrop leaks users' pii, and there's not much they can do about it. Ars Technica. Retrieved February 22, 2023, from https://arstechnica.com/gadgets/2021/04/apples-airdrop-leaks-users-pii-and-theres-not-much-they-can-do-about-it/ 
###
Wikimedia Foundation. (2023, February 22). Airdrop. Wikipedia. Retrieved February 22, 2023, from https://en.wikipedia.org/wiki/AirDrop 
