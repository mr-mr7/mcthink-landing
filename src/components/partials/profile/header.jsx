"use client";
import Image from "next/legacy/image";
import Link from "next/link";

const ProfileHeader = () => {
  return (
    <>
      <div className="panel-menu container-panel">
        <div>
          <Link href={"/"}>
            <Image src={""} width={225} className="panel-logo" />
          </Link>
        </div>
        <div>
          <span>به پنل ادمین خوش آمدید.</span>
          <span>|</span>
          <span>26 دی ماه 1403</span>
        </div>
      </div>
    </>
  );
};
export default ProfileHeader;
