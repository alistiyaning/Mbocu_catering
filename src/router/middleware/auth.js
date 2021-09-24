export default function auth({ next, router }) {
  if (!localStorage.getItem('token')) {
    return router.push({ name: 'Sign-In' });
  }

  return next();
}