// @ts-nocheck
import { fail } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { personalInfoSchema } from '$lib/schemas';
import type { Actions, PageServerLoad } from './$types';
import PocketBase from 'pocketbase';
import type { ClientResponseError } from 'pocketbase';

const pb = new PocketBase('https://clinical-audit.pockethost.io');

// Mock function to validate data before saving
async function validateAuditData(data: any) {
  try {
    // Add any additional validation logic here
    return true;
  } catch (error) {
    console.error('Validation error:', error);
    return false;
  }
}

export const load = async () => {
  const form = await superValidate(zod(personalInfoSchema));
  return { form };
};

export const actions = {
  create: async ({ request }: import('./$types').RequestEvent) => {
    const form = await superValidate(request, zod(personalInfoSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    try {
      // Validate form data
      const isValid = await validateAuditData(form.data);
      if (!isValid) {
        return message(form, 'Invalid audit data. Please check your entries.', { status: 400 });
      }

      // Remove duplicate fields and prepare data
      const formData = Object.entries(form.data).reduce((acc, [key, value]) => {
        if (!acc[key]) acc[key] = value;
        return acc;
      }, {} as Record<string, any>);

      // Save to PocketBase
      await pb.collection('template').create({
        ...formData,
        dateOfReview: new Date().toISOString().split('T')[0]
      });
      
      return message(form, 'Clinical audit submitted successfully!');
    } catch (error) {
      const { status } = error as ClientResponseError;
      console.error('Failed to save audit:', status);
      return message(form, 'Failed to save audit data. Please try again.', { status: 500 });
    }
  }
}; ;null as any as PageServerLoad;;null as any as Actions;