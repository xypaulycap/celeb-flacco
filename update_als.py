import re

with open('programs/als-awareness/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace social links
content = content.replace('https://www.facebook.com/Burrowfdn', 'https://www.facebook.com/')
content = content.replace('https://www.instagram.com/burrowfoundation/?igshid=YmMyMTA2M2Y%3D', 'https://www.instagram.com/')
content = content.replace('https://twitter.com/Burrowfdn', 'https://twitter.com/')

# Build new sections content
new_sections = '''	<section id="header_c">
		<div class="image" style="background-image: url('../../noah/als2.JPG');"></div>
		<div class="content_c">
			<h2>ALS Awareness</h2>
			<p><strong>Standing Together Against Amyotrophic Lateral Sclerosis</strong></p>
			<p>Haven Hands Foundation is proud to stand in joint support of the <strong>Hope for Hannah Foundation</strong>. Together, we are dedicated to raising critical awareness, educating communities, and providing essential support for patients and their families battling Amyotrophic Lateral Sclerosis (ALS), also known as Lou Gehrig's disease.</p>
			<p>By joining forces, our shared mission amplifies our impact—funding crucial research, expanding outreach programs, and ensuring that no one faces this devastating neurodegenerative condition alone. Through community walks, fundraising events, and educational seminars, we strive to make a profound difference and foster a strong, compassionate support network.</p>
		</div>
	</section>

	<section id="information_and_faqs_c">
		<div class="desktop_w">
			<h1 style="color: #3d74b6;">ALS Information & FAQ</h1>

			<div class="information_and_faq_c" style="margin-bottom: 20px;">
				<div class="header" tabindex="0" style="background-color: #b30000; color: white; padding: 15px; cursor: pointer; font-weight: bold; border-radius: 8px 8px 0 0;">What is ALS?</div>
				<div class="copy" style="padding: 15px; background-color: #fff; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px;">
					<p>Amyotrophic lateral sclerosis (ALS) is a progressive neurodegenerative disease that affects nerve cells in the brain and spinal cord. As the disease progresses, the brain loses the ability to initiate and control muscle movement.</p>
				</div>
			</div>

			<div class="information_and_faq_c" style="margin-bottom: 20px;">
				<div class="header" tabindex="0" style="background-color: #b30000; color: white; padding: 15px; cursor: pointer; font-weight: bold; border-radius: 8px 8px 0 0;">How does Haven Hands support ALS patients with Hope for Hannah?</div>
				<div class="copy" style="padding: 15px; background-color: #fff; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px;">
					<p>In partnership with the Hope for Hannah Foundation, we organize comprehensive community outreach, provide specialized care packages, and fund local support groups. We believe that no one should have to face ALS alone, and our united community is here to provide hands-on assistance and emotional support.</p>
				</div>
			</div>

			<div class="information_and_faq_c" style="margin-bottom: 20px;">
				<div class="header" tabindex="0" style="background-color: #b30000; color: white; padding: 15px; cursor: pointer; font-weight: bold; border-radius: 8px 8px 0 0;">How can I get involved and raise awareness?</div>
				<div class="copy" style="padding: 15px; background-color: #fff; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px;">
					<p>You can make an immediate impact by volunteering at our joint events, participating in our annual awareness walks, or making a donation to support our expanded care package programs.</p>
				</div>
			</div>
		</div>
	</section>

	<section id="gallery_c" style="padding: 80px 0; background-color: #fef3df;">
		<div class="desktop_w">
			<h1 style="text-align: center; margin-bottom: 10px; color: #3d74b6; font-size: 36px;">Moments of Hope &amp; Awareness</h1>
			<p style="text-align: center; margin-bottom: 50px; color: #555; font-size: 18px;">Our community standing strong together against ALS.</p>
			
			<div class="gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; padding: 0 20px;">
				<div style="overflow: hidden; border-radius: 12px; box-shadow: 0 6px 15px rgba(0,0,0,0.15); transition: transform 0.3s ease;">
					<img src="../../noah/hh1.JPG" alt="Haven Hands Foundation ALS Support Event" style="width: 100%; height: 280px; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
				</div>
				<div style="overflow: hidden; border-radius: 12px; box-shadow: 0 6px 15px rgba(0,0,0,0.15); transition: transform 0.3s ease;">
					<img src="../../noah/hh2.JPG" alt="Haven Hands Foundation ALS Support Event" style="width: 100%; height: 280px; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
				</div>
				<div style="overflow: hidden; border-radius: 12px; box-shadow: 0 6px 15px rgba(0,0,0,0.15); transition: transform 0.3s ease;">
					<img src="../../noah/hh3.JPG" alt="Haven Hands Foundation ALS Support Event" style="width: 100%; height: 280px; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
				</div>
				<div style="overflow: hidden; border-radius: 12px; box-shadow: 0 6px 15px rgba(0,0,0,0.15); transition: transform 0.3s ease;">
					<img src="../../noah/hh4.JPG" alt="Haven Hands Foundation ALS Support Event" style="width: 100%; height: 280px; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
				</div>
				<div style="overflow: hidden; border-radius: 12px; box-shadow: 0 6px 15px rgba(0,0,0,0.15); transition: transform 0.3s ease;">
					<img src="../../noah/hh5.JPG" alt="Haven Hands Foundation ALS Support Event" style="width: 100%; height: 280px; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
				</div>
				<div style="overflow: hidden; border-radius: 12px; box-shadow: 0 6px 15px rgba(0,0,0,0.15); transition: transform 0.3s ease;">
					<img src="../../noah/hh6.JPG" alt="Haven Hands Foundation ALS Support Event" style="width: 100%; height: 280px; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
				</div>
				<div style="overflow: hidden; border-radius: 12px; box-shadow: 0 6px 15px rgba(0,0,0,0.15); transition: transform 0.3s ease;">
					<img src="../../noah/hh7.JPG" alt="Haven Hands Foundation ALS Support Event" style="width: 100%; height: 280px; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
				</div>
				<div style="overflow: hidden; border-radius: 12px; box-shadow: 0 6px 15px rgba(0,0,0,0.15); transition: transform 0.3s ease;">
					<img src="../../noah/hh8.JPG" alt="Haven Hands Foundation ALS Support Event" style="width: 100%; height: 280px; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
				</div>
			</div>
		</div>
	</section>'''

# Replace the sections
pattern = re.compile(r'<section id="header_c">.*?</section>\s*<section id="information_and_faqs_c">.*?</section>\s*<section id="gallery_c"[^>]*>.*?</section>', re.DOTALL)
new_full_content, count = pattern.subn(new_sections, content)

if count > 0:
    with open('programs/als-awareness/index.html', 'w', encoding='utf-8') as f:
        f.write(new_full_content)
    print(f'Successfully replaced content. {count} match(es) found.')
else:
    print('Pattern not found in file.')
