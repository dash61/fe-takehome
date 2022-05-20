export async function getDeviceData(page=1) {
  try {
    const req = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    };
    const rsp = await fetch(`https://jsonmock.hackerrank.com/api/iot_devices/search?page=${page}`, req);
    if (rsp.status === 200) {
        return await rsp.json();
    }
  } catch (err) {
    console.log("getting user data - EXCEPTION - err=", err);
  }
  return undefined;
}
