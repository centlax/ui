import { z } from 'zod';

export const schema = z.object({
	email: z.string().min(4, 'Please enter a valid email.'),
	password: z.string().min(8, 'Minimum length 8.')
});
