import { useRouter } from 'next/router'

export default function Lang() {
    const router = useRouter()
    const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => router.push(router.basePath, router.asPath, { locale: e.target.value })

    return (
        <div className="text-sm font-semibold">
            <select defaultValue={router.locale} onChange={changeLanguage} className='text-base font-[600] bg-transparent'>
                {
                    router.locales?.map(locale => (
                        <option key={locale} value={locale}>
                            {locale.toLocaleUpperCase()}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}