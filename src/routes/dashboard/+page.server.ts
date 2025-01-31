import { pb } from '$lib/pocketbase/client';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  try {
    // Get recent submissions first (limited to 10)
    const recentSubmissions = await pb.collection('template').getList(1, 10, {
      sort: '-created',
      // Fetch all fields for export but only display selected ones
      expand: ''
    });

    // Get total count
    const totalCount = await pb.collection('template').getList(1, 1, {
      fields: 'id'
    });

    return {
      totalRecords: totalCount.totalItems,
      recentSubmissions: recentSubmissions.items,
      success: true
    };
  } catch (error) {
    console.error('Error loading dashboard data:', error);
    return {
      totalRecords: 0,
      recentSubmissions: [],
      success: false,
      error: 'Failed to load dashboard data'
    };
  }
}) satisfies PageServerLoad;