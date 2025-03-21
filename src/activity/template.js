import { stringToNode } from '../shared/utils/dom.js';

function createActivityRecord(username, profileImage, content, timeAgo) {
  return stringToNode(`  
    <article class="activity-record">
      <div class="record-header">
        <img
          src="${profileImage}"
          alt="사용자 프로필 이미지"
          class="profile-img"
        />
      </div>
      <section class="content flex-col">
        <h2 class="username tx-m14 text-default">@${username}</h2>
        <p class="action-text tx-m14 text-default tx-m14">
        ${content}
        </p>
        <p class="timestamp tx-m12 text-weak">
          <time>${timeAgo} 전</time>
        </p>
      </section>
    </article>
  `);
}

export { createActivityRecord };
