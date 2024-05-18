import { ApplianceIcon,PhoneIcon, ComputerIcon, 
        FashionIcon, SportIcon, ElectronicsIcon, 
        HealthBeautyIcon, BabyProductIcon, GamingIcon, OthersIcon } from '../../../assets';


const HeroTab = () => {
  const options = [
    { name: 'Appliances', icon: <ApplianceIcon /> },
    { name: 'Phone & Tablets', icon: <PhoneIcon /> },
    { name: 'Computing', icon: <ComputerIcon /> },
    { name: 'Fashion', icon: <FashionIcon /> },
    { name: 'Sport Items', icon: <SportIcon /> },
    { name: 'Electronics', icon: <ElectronicsIcon /> },
    { name: 'Health & Beauty', icon: <HealthBeautyIcon /> },
    { name: 'Baby Product', icon: <BabyProductIcon /> },
    { name: 'Gaming', icon: <GamingIcon /> },
    { name: 'Others', icon: <OthersIcon /> },
  ];

  return (
    <div className="hero-tab bg-pink rounded-r-3xl p-8 hidden md:flex flex-col gap-5">
      <p className="text-sm text-opacity-30 font-poppins font-normal mb-4 text-grey pt-2">
        Select any category below</p>
      <div className="flex flex-col gap-6">
        {options.map((option, index) => (
          <div key={index} className="flex items-center gap-3">
            <div>{option.icon}</div>
            <div>{option.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroTab;