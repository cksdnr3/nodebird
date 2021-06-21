import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
    const followerList = [{ nickname: 'following1' }, { nickname: 'following2' }, { nickname: 'following3' }];
    const followingList = [{ nickname: 'follower1' }, { nickname: 'follower2' }, { nickname: 'follower3' }];

    return (
        <>
            <Head>
                <title>Profile | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList} />
                <FollowList header="팔로워 목록" data={followerList} />
            </AppLayout>
        </>
    );
};

export default Profile;
