import PocketBase from "pocketbase";
const pb = new PocketBase("https://clinical-audit.pockethost.io");
pb.autoCancellation(false);
const load = async () => {
  try {
    const recentSubmissions = await pb.collection("template").getList(1, 100, {
      sort: "-created",
      // Fetch all fields
      fields: "*",
      expand: ""
    });
    const totalCount = await pb.collection("template").getList(1, 1, {
      fields: "id"
    });
    return {
      totalRecords: totalCount.totalItems,
      recentSubmissions: recentSubmissions.items,
      success: true
    };
  } catch (error) {
    console.error("Error loading dashboard data:", error);
    return {
      totalRecords: 0,
      recentSubmissions: [],
      success: false,
      error: "Failed to load dashboard data"
    };
  }
};
export {
  load
};
