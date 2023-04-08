import Header from '@/components/Header/Header.component';

function MainLayout({ children }: any) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
    </>
  );
}

export default MainLayout;
