import React,{useEffect} from 'react';
const LanguageSelector = ({ lngs, i18n }) => {
    const handleChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };
    useEffect(() => {
        const direction = i18n.resolvedLanguage === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('dir', direction);
        const fontClass = i18n.resolvedLanguage === 'ar' ? 'font-arabic' : 'font-sans';
        document.documentElement.classList.remove('font-sans', 'font-arabic');
        document.documentElement.classList.add(fontClass);
    }, [i18n.resolvedLanguage]);
    const isArabic = i18n.resolvedLanguage === 'ar';
    const containerClass = isArabic ? 'font-arabic' : 'font-sans';
    return (
        <div className={`flex justify-center gap-4 ${containerClass}`}>
            <select
                onChange={handleChange}
                value={i18n.resolvedLanguage}
                className='bg-black px-3 py-1 rounded-xl text-white'
            >
                {Object.keys(lngs).map(x => (
                    <option key={x} value={x}>
                        {lngs[x].name}
                    </option>
                ))}
            </select>
        </div>
    );
};
export default LanguageSelector;