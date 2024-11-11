exports.SendOtp = async (req, res) => {
  const { number } = req.body;
  const accountSid = "AC2e94c478aa882f36ead80107639a0ee5";
  const authToken = "9dc3f6b856e4d95f07de77aac75fe703";
  const serviceSid = "VA2ef38061d8b08b9e39273da29795e510";
  const client = require("twilio")(accountSid, authToken);

  try {
    const verification = await client.verify.v2
      .services(serviceSid)
      .verifications.create({ to: number, channel: "sms" });

    res
      .status(200)
      .json({ message: "OTP sent successfully!", status: verification.status });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.verifyOtp = async (req, res) => {
  const { number, code } = req.body;
  const accountSid = "AC2e94c478aa882f36ead80107639a0ee5";
  const authToken = "9dc3f6b856e4d95f07de77aac75fe703";
  const serviceSid = "VA2ef38061d8b08b9e39273da29795e510";
  const client = require("twilio")(accountSid, authToken);

  try {
    const verificationCheck = await client.verify.v2
      .services(serviceSid)
      .verificationChecks.create({ to: number, code });

    if (verificationCheck.status === "approved") {
      res.status(200).json({ message: "Verification successful!" });
    } else {
      res.status(400).json({ message: "Invalid OTP" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
