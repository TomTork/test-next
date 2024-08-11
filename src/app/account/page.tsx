'use client'
import styles from './Account.module.css'
import {useParams, usePathname, useRouter, useSearchParams} from "next/navigation";

export default function AccountPage() {
    const {push} = useRouter()
    const pathname = usePathname()
    const params = useSearchParams()
    const user = useParams<{slug: string}>() //[user] = slug
    return (
        <div className={styles.account}>
            Account
        </div>
    )
}